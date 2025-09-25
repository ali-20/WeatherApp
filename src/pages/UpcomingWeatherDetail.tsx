import { View, StyleSheet } from 'react-native'
import React from 'react'
import AppHeader from '../components/AppHeader';
import AppIcon from '../components/AppIcon';
import { useNavigation } from '@react-navigation/native';
import WeatherCard from '../components/WeatherCard';
import DailyWeatherList from '../components/DailyWeatherList';
import WeatherGradientBackground from '../components/WeatherGradientBackground';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const UpcomingWeatherDetail = () => {

  const { data, loading, isCelcius } = useSelector(
    (state: RootState) => state.weather
  );

  const tomorrowWeatherData = data?.forecast?.forecastday[1] ? data?.forecast?.forecastday[1] : null

  return (
    <WeatherGradientBackground>
      <AppHeader
        isBack
        title={"Next 7 Days"}
      />
      <View style={styles.subContainer}>
        <WeatherCard
          weatherDay='Tomorrow'
          weatherTemp={isCelcius ? `${tomorrowWeatherData?.day?.avgtemp_c}°` : `${tomorrowWeatherData?.day?.avgtemp_f} F`}
          weatherIcon={tomorrowWeatherData?.day?.condition?.icon}
          weatherRain={tomorrowWeatherData?.day?.totalprecip_mm! > 0 ? `${tomorrowWeatherData?.day?.totalprecip_mm} mm` : "No Rain"}
          weatherWind={tomorrowWeatherData?.day?.maxwind_kph}
          weatherHumidity={tomorrowWeatherData?.day?.avghumidity}

        />
      </View>
      <DailyWeatherList />
    </WeatherGradientBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  subContainer: {
    // flex:1,
    paddingHorizontal: 28,
    paddingTop: 20,

  },
  searchIcon: {
    width: 20,
    height: 20
  }
});

export default UpcomingWeatherDetail