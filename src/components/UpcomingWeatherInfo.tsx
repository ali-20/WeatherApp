import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import WeatherCapsule from './WeatherCapsule'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import weatherService from '../services/weatherService'
import { MemoizedList } from './MemoizedList'
import { useNavigation } from '@react-navigation/native'
import { EScreens } from '../enums/EAppStack'

const UpcomingWeatherInfo = () => {
    const navigation = useNavigation();
    const { data, loading, isCelcius } = useSelector(
        (state: RootState) => state.weather
    );

    const insets = useSafeAreaInsets();


    const onItemPress = () => {
        navigation.navigate(EScreens.UPCOMING_WEATHER_DETAIL)
    }


    const renderWeatherCapsule = ({ item, index }) => {

        return (
            <WeatherCapsule
                icon={item?.condition?.icon}
                label={weatherService.formatEpoch(item?.time_epoch, { hour: "2-digit", minute: "2-digit" })}
                value={isCelcius ? `${item?.temp_c}°` : `${item?.temp_f} F`}
                onPress={onItemPress}
            />
        )
    }



    return (
        <View style={[styles.container, { paddingBottom: insets.bottom + 10 }]}>

            {
                loading ?
                    null :
                    <MemoizedList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.capsuleList}
                        horizontal
                        data={data?.forecast?.forecastday ? data?.forecast?.forecastday[0]?.hour : []}
                        renderItem={renderWeatherCapsule}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    capsuleList: {
        paddingHorizontal: 20

    },

});

export default UpcomingWeatherInfo