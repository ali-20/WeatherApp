import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import axios from "axios";
import { WEATHER_API_KEY,WEATHER_BASE_URL } from "@env"
import { GradientConfig, TWeatherCondition, WeatherData } from "../interfaces/weatherInterface";
import { gradients, weatherCodes } from "./weatherCondition";
import { setGradient } from "../store/weatherSlice";
import { store } from "../store";


const DEFAULT_CITY = "united states";

const getWeatherGradient = (condition: TWeatherCondition): GradientConfig => {
    return gradients[condition];
}

const requestLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === "ios") return true;

    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Weather App Location Permission",
                message: "We need your location to fetch the weather data",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK",
            }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
        console.warn("Permission error:", err);
        return false;
    }
};

const getCurrentLocation = (): Promise<{ lat: number; lon: number }> => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
            },
            (error) => {
                console.log("getting current location error:", error)
                reject(error)
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 }
        );
    });
};



const fetchWeatherByLocation = async (location: string): Promise<WeatherData | null> => {
    try {
        const response = await axios.get(`${WEATHER_BASE_URL}/forecast.json`, {
            params: {
                key: WEATHER_API_KEY,
                q: location,
                days: 7,
                aqi: "no",
                alerts: "no",
            },
        });

        return response.data as WeatherData;
    } catch (error) {
        console.error("Weather fetch By Location failed:", error);
        return null;
    }
}


const fetchWeather = async (): Promise<WeatherData | null> => {
    try {
        const hasPermission = await requestLocationPermission();
        let query = DEFAULT_CITY;

        if (hasPermission) {
            try {
                const coords = await getCurrentLocation();
                query = `${coords.lat},${coords.lon}`;
            } catch (err) {
                console.warn("Location fetch failed, using current location:", err);
            }
        }
        console.log("hasPermission:", hasPermission);
        console.log("query:", query);
        const response = await fetchWeatherByLocation(query);
        if (response) {
            setAppGradient(response)
        }
        return response as WeatherData;

    } catch (error) {
        console.error("Weather fetch failed:", error);
        return null;
    }
};

const setAppGradient = (response: WeatherData) => {

    try {
        console.log("weather Data:", response)
        if (response && response?.current?.condition?.code) {
            const conditionCode = response?.current?.condition?.code;
            const isDay = response?.current?.is_day;
            const weatherCondition = getWeatherCondition(conditionCode, isDay)
            console.log("weatherCondition:", weatherCondition, isDay);
            if (weatherCondition) {
                store.dispatch(setGradient(weatherCondition))
            }
        }
    } catch {

    }
}

const getWeatherCondition = (
    code: number,
    isDay: number
): TWeatherCondition => {
    if (code === 1000) {
        return isDay ? "sunny" : "night_clear";
    }

    if (code === 1003) {
        return isDay ? "partly_cloudy" : "night_cloudy";
    }

    const mapped = weatherCodes[code];
    return mapped || "cloudy";
}

const formatEpoch = (epoch: number, formatOptions?: Intl.DateTimeFormatOptions) => {
    try {
        if (epoch) {
            const formattedTime = new Date(epoch * 1000)
                .toLocaleTimeString("en-GB", formatOptions);
            return formattedTime
        } else {
            return ''
        }

    } catch {
        return ''
    }

}

const formatEpochToWeekDay = (epoch: number) => {
    try {
        if (epoch) {
            const date = new Date(epoch * 1000);
            const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
            return dayName
        } else {
            return ''
        }

    } catch {
        return ''
    }
}

const weatherService = {
    getWeatherGradient,
    fetchWeatherByLocation,
    fetchWeather,
    getWeatherCondition,
    formatEpoch,
    formatEpochToWeekDay,
    setAppGradient
}

export default weatherService;