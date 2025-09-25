import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import AppIcon from './AppIcon';
import AppText from './AppText';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import Shimmer from './Shimmer';
import AppUriImage from './AppUriImage';
import { toggleUnit } from '../store/weatherSlice';

const WeatherInfo = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, isCelcius } = useSelector(
        (state: RootState) => state.weather
    );

    // const [isCalcius, setIsCalcius] = useState(true)

    const onUnitToggle = () => {
        dispatch(toggleUnit())
    }

    return (

        <View style={styles.container}>

            <View style={styles.weatherInfoContainer}>

                {loading ?
                    <>
                        <Shimmer width={'48%'} height={74} borderRadius={10} />
                        <Shimmer width={'48%'} height={74} borderRadius={10} />

                    </>
                    :
                    <>
                        <View style={styles.iconContainer} >

                            <AppUriImage icon={data?.current?.condition?.icon!} iconStyle={styles.weatherIcon} />
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.tempContainer}>
                                <AppText variant="banner" >{isCelcius ? data?.current.temp_c : data?.current.temp_f}</AppText>
                                <AppText variant="body">{isCelcius ? `° C` : `° F`}</AppText>
                            </View>
                            <AppText variant="body" style={styles.temperaturText}>{data?.current?.condition?.text}</AppText>

                        </View>

                    </>
                }
            </View>
            {!loading &&
                <View style={styles.unitInterchangeContainer}>
                    <AppIcon onPress={onUnitToggle} icon={require('../assets/interchange.png')} iconStyle={styles.interchangeIcon} />
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        paddingVertical: 22,
        justifyContent: 'space-between'
    },
    weatherInfoContainer: {
        flexDirection: 'row',
    },
    unitInterchangeContainer: {
        marginTop: -10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        flex: 1.1,
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    textContainer: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'flex-start',

    },
    weatherIcon: {
        width: 183,
        height: 150,
        // marginBottom: -25
    },
    temperaturText: {
        textAlign: 'center',
        marginTop: -6,
        // marginLeft: 10
    },
    celciusContainer: {
        position: 'absolute',
        right: 0,
        top: 40
    },
    tempContainer: {
        flexDirection: 'row'
    },
    interchangeIcon: {
        width: 40,
        height: 40,
        transform: [{ rotate: '90deg' }]
    }
});

export default WeatherInfo