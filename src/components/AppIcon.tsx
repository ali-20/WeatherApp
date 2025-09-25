import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType, StyleProp, ImageStyle, GestureResponderEvent } from 'react-native'
import React from 'react'



interface IAppIcon {
    icon?: ImageSourcePropType | undefined
    iconStyle?: StyleProp<ImageStyle>
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const AppIcon = ({ icon, iconStyle, onPress }: IAppIcon) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image source={icon} style={[styles.icon, iconStyle]} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20

    },

});

export default AppIcon