import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import WeatherGradientBackground from '../components/WeatherGradientBackground'
import AppHeader from '../components/AppHeader'
import { RootState } from '../store'
import { useSelector } from 'react-redux'
import WeatherCard from '../components/WeatherCard'
import BlurredButton from '../components/BlurredButton'

const WeatherDetails = () => {
    const { data, loading, isCelcius } = useSelector(
        (state: RootState) => state.weather
    );
    return (
        <WeatherGradientBackground>
            <AppHeader
                isBack
                title={"Weather Details"}
            />
            <View style={styles.subContainer}>
                <WeatherCard
                    weatherDay='Today'
                    weatherTemp={isCelcius ? `${data?.current.temp_c}°` : `${data?.current.temp_f} F`}
                    weatherIcon={data?.current?.condition?.icon!}
                    weatherRain={data?.current?.precip_mm! > 0 ? `${data?.current?.precip_mm} mm` : "No Rain"}
                    weatherWind={data?.current.wind_kph}
                    weatherHumidity={data?.current.humidity}

                />


            </View>
            <ScrollView style={styles.subContainer}>
                <BlurredButton
                    icon={require("../assets/feelsLike.png")}
                    label="Feels Like"
                    value={isCelcius?`${data?.current?.feelslike_c} °C`:`${data?.current?.feelslike_f} F`}
                    onPress={() => { }}
                    iconStyles={styles.buttonIcon}
                />

                <BlurredButton
                    icon={require("../assets/pressure.png")}
                    label="Pressure"
                    value={`${data?.current?.pressure_mb} mb`}
                    onPress={() => { }}
                    iconStyles={styles.buttonIcon}
                />

                <BlurredButton
                    icon={require("../assets/visibility.png")}
                    label="Visibility"
                    value={`${data?.current?.vis_km} km`}
                    onPress={() => { }}
                    iconStyles={styles.buttonIcon}
                />

                <BlurredButton
                    icon={require("../assets/uv.png")}
                    label="UV Index"
                    value={`${data?.current?.uv}`}
                    onPress={() => { }}
                    iconStyles={styles.buttonIcon}
                />

                <BlurredButton
                    icon={require("../assets/cloud.png")}
                    label="Cloud Cover"
                    value={`${data?.current?.cloud} %`}
                    onPress={() => { }}
                    iconStyles={styles.buttonIcon}
                />

                <BlurredButton
                    icon={require("../assets/dew.png")}
                    label="Dew Point"
                    value={isCelcius ?`${data?.current?.dewpoint_c} °C`:`${data?.current?.dewpoint_f} F`}
                    onPress={() => { }}
                    iconStyles={styles.buttonIcon}
                />
            </ScrollView>
        </WeatherGradientBackground>
    )
}

const styles = StyleSheet.create({

    subContainer: {
        // flex:1,
        paddingHorizontal: 28,
        paddingTop: 20,

    },
    buttonIcon: {width:40,height:40,marginHorizontal:10,marginRight:14 }
});

export default WeatherDetails 