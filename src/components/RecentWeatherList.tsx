import { View, Text, FlatList, StyleSheet, Alert } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import WeatherCard from './WeatherCard';
import AppText from './AppText';
import { addFavorites, setWeather } from '../store/weatherSlice';
import { WeatherData } from '../interfaces/weatherInterface';
import weatherService from '../services/weatherService';
import { useNavigation } from '@react-navigation/native';
import { MemoizedList } from './MemoizedList';



interface IRecentWeatherList {
    weatherList: Array<WeatherData> | []
    isFavoriteList?: boolean
}

const RecentWeatherList = ({ weatherList, isFavoriteList }: IRecentWeatherList) => {
    const { isCelcius } = useSelector(
        (state: RootState) => state.weather
    );

    const dispatch = useDispatch<AppDispatch>();
    const navigation = useNavigation();

    const onRecentWeatherPress = (data: WeatherData) => {
        dispatch(setWeather(data));
        weatherService.setAppGradient(data);
        navigation.goBack();
    }

    const onAddToFavorite = (weatherItem: WeatherData) => {
        dispatch(addFavorites(weatherItem))
        Alert.alert("Added To Favorites")
    }

    const renderRecentWeatherItem = ({ item, index }) => {
        return (
            <View style={styles.recentWeatherItem}>
                <View style={styles.recentWeatherItemHeader}>
                    <AppText variant="body">{item?.location?.name}</AppText>
                    {!isFavoriteList && <AppText onPress={() => { onAddToFavorite(item) }} variant="caption" style={styles.addFavContainer}>Add To Favorites</AppText>}
                </View>
                <WeatherCard
                    weatherDay='Today'
                    weatherTemp={isCelcius ? `${item?.current?.temp_c}°` : `${item?.current?.temp_f} F`}
                    weatherIcon={item?.current?.condition?.icon}
                    weatherRain={item?.current?.precip_mm! > 0 ? `${item?.current?.precip_mm} mm` : "No Rain"}
                    weatherWind={item?.current?.wind_kph}
                    weatherHumidity={item?.current?.humidity}
                    onPress={() => { onRecentWeatherPress(item) }}
                />
            </View>
        )
    }

    return (
        <View>
            <MemoizedList
                contentContainerStyle={styles.listContainer}
                showsHorizontalScrollIndicator={false}
                data={weatherList}
                renderItem={renderRecentWeatherItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 20,
        paddingBottom: 200
    },
    recentWeatherItem: {
        marginTop: 12
    },
    recentWeatherItemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addFavContainer: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        paddingHorizontal: 8
    }
})

export default RecentWeatherList