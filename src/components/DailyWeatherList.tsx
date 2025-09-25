import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import BlurredButton from './BlurredButton';
import weatherService from '../services/weatherService';
import { MemoizedList } from './MemoizedList';

const DailyWeatherList = () => {
    const { data, loading,isCelcius } = useSelector(
        (state: RootState) => state.weather
    );


    const renderDailyWeatherItem = ({ item, index }) => {
        return (
            <BlurredButton
                isUriIcon={true}
                icon={item?.day?.condition?.icon}
                label={isCelcius? `${item?.day?.avgtemp_c}°`:`${item?.day?.avgtemp_f} F`}
                value={weatherService.formatEpochToWeekDay(item?.date_epoch)}
                onPress={() => { }}
                iconStyles={styles.dailyWeatherIcon}
            />
        )
    }

    return (
        <View>

            {
                loading ?
                    null :
                    <MemoizedList
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.listContainer}
                       
                        data={data?.forecast?.forecastday ? data?.forecast?.forecastday : []}
                        renderItem={renderDailyWeatherItem}
                    />
            }


        </View>
    )
}

const styles = StyleSheet.create({
    dailyWeatherIcon: { height: 45, width: 45,marginHorizontal:10 },
    listContainer:{
        marginTop:10,
        paddingHorizontal:20,
        paddingBottom:400
    }

});

export default DailyWeatherList