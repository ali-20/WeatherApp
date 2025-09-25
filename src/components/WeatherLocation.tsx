import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppText from './AppText';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Shimmer from './Shimmer';

const WeatherLocation = () => {

    const { data, loading, error } = useSelector(
        (state: RootState) => state.weather
    );

    return (
        <View style={styles.container}>

            {
                loading ?
                    <>
                        <Shimmer width={120} height={24} borderRadius={10} style={styles.bottomGap} />
                        <Shimmer width={100} height={24} borderRadius={10} style={styles.bottomGap} />
                        <Shimmer width={50} height={24} borderRadius={10} />
                    </>
                    :
                    <>
                        <AppText variant="heading">{data?.location?.name},</AppText>
                        <AppText variant="heading" style={styles.country}>{data?.location?.country}</AppText>
                        <AppText variant="label" style={styles.date}>{new Date().toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                        })}</AppText>
                    </>
            }



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 28,
        paddingTop:10,
        paddingBottom: 5,
    },
    country: {
        marginTop: -4
    },
    date: {
        marginTop: 2
    },
    bottomGap: {
        marginBottom: 10
    }



});

export default WeatherLocation