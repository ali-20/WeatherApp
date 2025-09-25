import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import WeatherGradientBackground from '../components/WeatherGradientBackground'
import SearchHeader from '../components/SearchHeader'
import RecentWeatherList from '../components/RecentWeatherList'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const WeatherSearch = () => {
    const { recents } = useSelector(
        (state: RootState) => state.weather
    );
    return (
        <WeatherGradientBackground>
            <SearchHeader />
            <RecentWeatherList weatherList={recents} />
        </WeatherGradientBackground>


    )
}



export default WeatherSearch