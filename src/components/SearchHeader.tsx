import { View,  StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import AppHeader from './AppHeader'
import AppIcon from './AppIcon'
import { useNavigation } from '@react-navigation/native'
import weatherService from '../services/weatherService'
import { addRecent } from '../store/weatherSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import BlurView from './BlurView'

const SearchHeader = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [weatherQuery, setweatherQuery] = useState('')
    const [isLoading, setisLoading] = useState(false)


    const renderSearchIcon = () => {
        return (
            isLoading ?
                <ActivityIndicator color={'#000000'} />
                :
                <AppIcon onPress={onSearchPress} icon={require('../assets/searchIcon.png')} />
        )
    }

    const renderSearch = () => {

        return (
            <View style={styles.searchContainer}>
               <BlurView/>
                <TextInput
                    value={weatherQuery}
                    onChangeText={(text) => {
                        setweatherQuery(text)
                    }}
                    style={styles.inputContainer}
                    placeholder='Enter City, Country'
                />
            </View>
        )
    }

    const onSearchPress = () => {
        if (weatherQuery) {
            setisLoading(true)
            weatherService.fetchWeatherByLocation(weatherQuery).then((response) => {
                setisLoading(false)
                if (response) {
                    // weatherService.setAppGradient(response)
                    // dispatch(setWeather(response))
                    // goBack()
                    dispatch(addRecent(response))
                }
            })
        }
    }

    return (
        <AppHeader
           isBack
            title={renderSearch}
            right={renderSearchIcon}
        />
    )
}


const styles = StyleSheet.create({
    searchContainer: {
        width: '100%',
        height: 35,

        borderRadius: 180,
        justifyContent: 'center',
        paddingHorizontal: 10


    },
    inputContainer: {

    marginBottom:-2
        

    }

});



export default SearchHeader