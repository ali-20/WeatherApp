import React from "react";
import { View, StyleSheet, ViewStyle, StyleProp } from "react-native";

interface IBlurView {

    style?: StyleProp<ViewStyle>;
};

const BlurView = ({ style }: IBlurView) => {
    return <View style={[StyleSheet.absoluteFill, styles.card, style]} />
};

const styles = StyleSheet.create({
    card: {

        backgroundColor: "rgba(255,255,255,0.2)",
        borderRadius: 16,
        // padding: 12,
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: 0.15,
        // shadowRadius: 2,
        // elevation: 1,
    },
});

export default BlurView;