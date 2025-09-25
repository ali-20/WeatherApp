import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,

    GestureResponderEvent,
} from "react-native";

import AppText from "./AppText";
import AppUriImage from "./AppUriImage";
import BlurView from "./BlurView";

type BlurredButtonProps = {
    icon?: string;
    label: string;
    value: string;
    onPress?: (event: GestureResponderEvent) => void;
    blurType?: "xlight" | "light" | "dark" | "extraDark" | "regular" | "prominent";
};

const WeatherCapsule: React.FC<BlurredButtonProps> = ({
    icon,
    label,
    value,
    onPress,
    blurType = "light",
}) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.wrapper}>

            <BlurView />
            <View style={styles.content}>
                <AppText variant="label">{label}</AppText>
                {icon &&

                    <AppUriImage icon={icon} iconStyle={styles.icon} />
                }

                <AppText variant="label">{value}</AppText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 50,
        overflow: "hidden",
        marginVertical: 6,
        height: 100,
        width: 60,
        alignSelf: "center",
        marginRight: 16
        // padding: 10

    },
    content: {
        flex: 1,

        alignItems: "center",
        justifyContent: "center",
        // paddingRight: 36,
        // paddingLeft:6
    },
    leftSection: {

        alignItems: "center",

        justifyContent: 'center'

    },
    icon: {
        width: 46,
        height: 46,

        marginTop: 2,
        resizeMode: 'contain',


    },
    label: {
        fontSize: 16,
        fontWeight: "500",
        color: "#222",
    },
    value: {
        fontSize: 15,
        fontWeight: "600",
        color: "#333",
    },
});

export default WeatherCapsule;