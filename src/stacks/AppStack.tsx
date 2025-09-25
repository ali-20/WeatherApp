
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EScreens } from '../enums/EAppStack';
import Home from '../pages/Home';
import UpcomingWeatherDetail from '../pages/UpcomingWeatherDetail';
import WeatherSearch from '../pages/WeatherSearch';
import Favorites from '../pages/Favorites';

const Stack = createNativeStackNavigator();
const AppStack =
    () => {


        return (
            <Stack.Navigator
                initialRouteName={EScreens.HOME}
                screenOptions={{
                    headerShown: false, 
                    animation: "slide_from_right", 
                }}
            >
                <Stack.Screen name={EScreens.HOME} component={Home}></Stack.Screen>
                <Stack.Screen name={EScreens.UPCOMING_WEATHER_DETAIL} component={UpcomingWeatherDetail}></Stack.Screen>
                <Stack.Screen name={EScreens.WEATHER_SEARCH} component={WeatherSearch}></Stack.Screen>
                <Stack.Screen name={EScreens.FAVORITES} component={Favorites}></Stack.Screen>
            </Stack.Navigator>

        )
    }

export default AppStack