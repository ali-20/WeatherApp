import { View, StyleSheet } from 'react-native'
import React from 'react'
import BlurredButton from './BlurredButton'
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Shimmer from './Shimmer';
import { useNavigation } from '@react-navigation/native';
import { EScreens } from '../enums/EAppStack';

const WeatherExtraInfo = () => {
    const navigation = useNavigation();
    const { data, loading } = useSelector(
        (state: RootState) => state.weather
    );


    const onWeatherInfoPress = () => {
        navigation.navigate(EScreens.WEATHER_DETAILS)
    }

    return (
        <View style={styles.container} >

            {

                loading ?
                    <>
                        <Shimmer width={'100%'} height={60} borderRadius={16} style={styles.bottomGap} />
                        <Shimmer width={'100%'} height={60} borderRadius={16} style={styles.bottomGap} />
                        <Shimmer width={'100%'} height={60} borderRadius={16} style={styles.bottomGap} />
                    </>
                    :
                    <>
                        <BlurredButton
                            icon={require("../assets/umbrella.png")}
                            label="RainFall"
                            value={data?.current?.precip_mm! > 0 ? `${data?.current?.precip_mm} mm` : "No Rain"}
                            onPress={onWeatherInfoPress}
                            iconStyles={styles.buttonIcon}
                        />
                        <BlurredButton
                            icon={require("../assets/wind.png")}
                            label="Wind"
                            value={`${data?.current.wind_kph} kph`}
                            onPress={onWeatherInfoPress}
                            iconStyles={styles.buttonIcon}
                        />
                        <BlurredButton
                            icon={require("../assets/humidity.png")}
                            label="Humidity"
                            value={`${data?.current.humidity} %`}
                            onPress={onWeatherInfoPress}
                            iconStyles={styles.buttonIcon}
                        />
                    </>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {


    },
    searchIcon: {
        width: 20,
        height: 20
    },
    bottomGap: {
        marginBottom: 10
    },
    buttonIcon: { marginBottom: -10 }
});


export default WeatherExtraInfo