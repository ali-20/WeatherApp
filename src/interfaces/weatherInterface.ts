export type TWeatherCondition =
    | "sunny"
    | "clear"
    | "cloudy"
    | "partly_cloudy"
    | "rainy"
    | "thunderstorm"
    | "snow"
    | "fog"
    | "mist"
    | "haze"
    | "windy"
    | "drizzle"
    | "night_clear"
    | "night_cloudy";


export type Point = { x: number; y: number };


export type GradientConfig = {
    colors: string[];
    start?: Point;
    end?: Point;
    useAngle?: boolean;
    angle?: number;
};


export type WeatherGradients = Record<TWeatherCondition, GradientConfig>

export type WeatherData = {
    location: {
        name: string;
        country: string;
        lat: number;
        lon: number;
        localtime: string;
    };
    current: {
        temp_c: number;
        temp_f: number;
        condition: {
            text: string;
            icon: string;
            code: number
        };
        humidity: number;
        wind_kph: number;
        is_day: number;
        precip_mm:number


    };
    forecast?: any;
};