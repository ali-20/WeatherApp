import { StyleSheet, ScrollView, View } from 'react-native'
import React, { useEffect } from 'react'
import AppHeader from '../components/AppHeader';
import AppIcon from '../components/AppIcon';
import WeatherLocation from '../components/WeatherLocation';
import WeatherInfo from '../components/WeatherInfo';
import WeatherExtraInfo from '../components/WeatherExtraInfo';
import UpcomingWeatherInfo from '../components/UpcomingWeatherInfo';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../enums/EAppStack';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { loadWeather } from '../store/weatherSlice';
import WeatherGradientBackground from '../components/WeatherGradientBackground';


const Home = () => {



    const navigation = useNavigation();
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        dispatch(loadWeather());
    }, []);




    const onNavigate = (screen: EScreens) => {
        navigation.navigate(screen)
    }

    const renderSearch = () => {
        return (
            <AppIcon onPress={() => { onNavigate(EScreens.WEATHER_SEARCH) }} icon={require('../assets/searchIcon.png')} />
        )
    }

    const renderMenu = () => {
        return (
            <View style={styles.rightIconContainer}>
                <AppIcon onPress={() => { onNavigate(EScreens.FAVORITES) }} icon={require('../assets/favHeart.png')} iconStyle={styles.starIcon} />
                <AppIcon onPress={() => { onNavigate(EScreens.UPCOMING_WEATHER_DETAIL) }} icon={require('../assets/burgerMenu.png')} />
            </View>
        )
    }



    return (
        <WeatherGradientBackground>

            <AppHeader
                left={renderSearch}
                right={renderMenu}
            />

            <ScrollView style={styles.subContainer}>
                <WeatherLocation />
                <WeatherInfo />
                <WeatherExtraInfo />

            </ScrollView>
            <UpcomingWeatherInfo />
        </WeatherGradientBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    subContainer: {
        paddingHorizontal: 28
    },
    searchIcon: {
        width: 20,
        height: 20
    },
    rightIconContainer: {
        flexDirection: 'row',
        marginLeft: -14
        // backgroundColor:'red',
        // width:60
        // paddingRight:10,
    },
    starIcon: {
        // marginRight:20
        marginLeft: -10,
        marginRight: 12
    }
});


export default Home