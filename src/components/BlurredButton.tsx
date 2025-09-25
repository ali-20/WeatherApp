import React from "react";
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    ImageSourcePropType,
    GestureResponderEvent,
    StyleProp,
    ImageStyle,
} from "react-native";

import AppText from "./AppText";
import AppUriImage from "./AppUriImage";
import AppIcon from "./AppIcon";
import BlurView from "./BlurView";

interface IBlurredButton {
    icon?: ImageSourcePropType | string;
    label: string;
    value: string;
    onPress?: (event: GestureResponderEvent) => void;
    blurType?: "xlight" | "light" | "dark" | "extraDark" | "regular" | "prominent";
    isUriIcon?: boolean
    iconStyles?: StyleProp<ImageStyle>
};

const BlurredButton = ({
    icon,
    label,
    value,
    onPress,
    blurType = "light",
    isUriIcon,
    iconStyles
}: IBlurredButton) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.wrapper}>
          

            <BlurView/>
                <View style={styles.content}>
                    <View style={styles.leftSection}>
                        {
                            icon ?
                                isUriIcon ?
                                    <AppUriImage icon={icon} iconStyle={[styles.icon, iconStyles]} />
                                    :
                                    <AppIcon icon={icon} iconStyle={[styles.icon, iconStyles]} />

                                :
                                null
                        }
                        <AppText variant="body">{label}</AppText>
                    </View>
                    <AppText variant="body">{value}</AppText>
                </View>
       
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 16,
        overflow: "hidden",
        marginVertical: 6,
        height: 60,
        width: "100%",
        alignSelf: "center",

    },
    content: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 36,
        paddingLeft: 6
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",

        justifyContent: 'center'

    },
    icon: {
        width: 68,
        height: 68,
        resizeMode: "cover",

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

export default BlurredButton;