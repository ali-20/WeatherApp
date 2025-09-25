import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { PropsWithChildren, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import weatherService from '../services/weatherService';


interface IWeatherGradientBackground extends PropsWithChildren {

}

const WeatherGradientBackground = ({ children }: IWeatherGradientBackground) => {

    const { gradient } = useSelector(
        (state: RootState) => state.weather
    );
    const weatherGradient = weatherService.getWeatherGradient(gradient);


    useEffect(() => {
        StatusBar.setBackgroundColor(weatherGradient.colors[0])
        return () => { }
    }, [gradient])



    return (
        <LinearGradient
            colors={weatherGradient.colors}
            useAngle={weatherGradient.useAngle}
            angle={weatherGradient.angle}
            start={weatherGradient.start}
            end={weatherGradient.end}
            style={styles.container}
        >
            {children}
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default WeatherGradientBackground