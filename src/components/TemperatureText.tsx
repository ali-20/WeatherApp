import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';


interface ITemperatureText {
    celciusTemp: number,
    
}

const TemperatureText = () => {

    const { isCelcius } = useSelector(
        (state: RootState) => state.weather
    );

    return (
        <View>
            <Text>TemperatureText</Text>
        </View>
    )
}

export default TemperatureText