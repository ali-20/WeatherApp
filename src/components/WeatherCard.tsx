import { View, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import AppText from './AppText';
import AppUriImage from './AppUriImage';
import BlurView from './BlurView';


interface IWeatherCard {

    blurType?: "xlight" | "light" | "dark" | "extraDark" | "regular" | "prominent";
};


interface IWeatherCard {
    weatherDay: string,
    weatherTemp: string,
    weatherIcon: string,
    weatherRain: string,
    weatherWind: string,
    weatherHumidity: string,
    onPress?: () => void
}

const WeatherCard = ({ weatherDay, weatherTemp, weatherIcon, weatherRain, weatherWind, weatherHumidity, onPress }: IWeatherCard) => {
   


    return (

        <Pressable onPress={onPress} style={styles.wrapper}>

            <BlurView />

            <View style={styles.cardHeader}>
                <AppText variant="body">{weatherDay}</AppText>
                <View style={styles.tempInfoContainer}>
                    <AppText variant="label">{weatherTemp}</AppText>
                    <AppUriImage icon={weatherIcon} iconStyle={styles.conditionIcon} />
                </View>
            </View>
            <View style={styles.cardContent}>
                <View style={styles.cardItem}>
                    {<Image source={require("../assets/umbrella.png")} style={styles.cardItemIcon} />}
                    <AppText variant="label" style={styles.cardItemText}>{weatherRain}</AppText>
                </View>
                <View style={styles.cardItem}>
                    {<Image source={require("../assets/wind.png")} style={styles.cardItemIcon} />}
                    <AppText variant="label" style={styles.cardItemText}>{weatherWind} kph</AppText>
                </View>
                <View style={styles.cardItem}>
                    {<Image source={require("../assets/humidity.png")} style={styles.cardItemIcon} />}
                    <AppText variant="label" style={styles.cardItemText}>{weatherHumidity} %</AppText>
                </View>
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 20,
        // backgroundColor:'pink',
        marginVertical: 6,
        overflow: 'hidden',
        // height: 60,
        width: "100%",
        paddingVertical: 30,
        paddingHorizontal: 20,
        paddingTop: 20

    },
    cardHeader: {


        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // paddingRight: 36,
        // paddingLeft: 6
    },
    conditionIcon: {
        width: 46,
        height: 46,

        marginBottom: -6,
        resizeMode: 'contain',
        marginLeft: 4
    },
    tempInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    cardItem: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    cardItemIcon: {
        width: 68,
        height: 68,

        resizeMode: "cover",
    },
    cardItemText: {
        marginTop: -10
    }
});

export default WeatherCard