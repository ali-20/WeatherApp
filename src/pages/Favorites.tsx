import { View, Text } from 'react-native'
import React from 'react'
import WeatherGradientBackground from '../components/WeatherGradientBackground'
import AppHeader from '../components/AppHeader'
import RecentWeatherList from '../components/RecentWeatherList'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Favorites = () => {
    const { favorites } = useSelector(
        (state: RootState) => state.weather
    );
    return (
        <WeatherGradientBackground>

            <AppHeader
                isBack
                title={"Favorites"}
            />
            <RecentWeatherList weatherList={favorites} isFavoriteList={true} />
        </WeatherGradientBackground>
    )
}

export default Favorites