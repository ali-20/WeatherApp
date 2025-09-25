import React, { useEffect, useRef, useState } from "react";
import {
    View,
    StyleSheet,
    Animated,
    ViewStyle,
    StyleProp,
    DimensionValue,
    LayoutChangeEvent,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

interface IShimmerProps {
    width?: DimensionValue | undefined;
    height?: DimensionValue | undefined;
    borderRadius?: number;
    shimmerColors?: string[];
    duration?: number;
    style?: StyleProp<ViewStyle>;
};

const DEFAULT_COLORS = ["#e0e0e085", "#f5f5f5a2", "#e0e0e0c9"]; 

const Shimmer = ({
    width = "100%",
    height = 12,
    borderRadius = 6,
    shimmerColors = DEFAULT_COLORS,
    duration = 1200,
    style,
}: IShimmerProps) => {
    const translateX = useRef(new Animated.Value(-1)).current;
    const [containerWidth, setContainerWidth] = useState(0);
    useEffect(() => {
        if (containerWidth === 0) return;
        const loop = Animated.loop(
            Animated.timing(translateX, {
                toValue: 1,
                duration,
                useNativeDriver: true,
            })
        );
        loop.start();
        return () => loop.stop();
    }, [translateX, duration,containerWidth]);

    const animatedStyle = {
        transform: [
            {
                translateX: translateX.interpolate({
                    inputRange: [-1, 1],
                   outputRange: [-(containerWidth+containerWidth), containerWidth],
                }),
            },
        ],
    };

    const handleLayout = (e: LayoutChangeEvent) => {
        setContainerWidth(e.nativeEvent.layout.width);
    };

    return (


        <View
            style={[
                {
                    width,
                    height,
                    borderRadius,
                    overflow: "hidden",
                    backgroundColor: "rgba(255,255,255,0.3)",
                },
                style,
            ]}
            onLayout={handleLayout}
        >

            <Animated.View
                style={[
                    StyleSheet.absoluteFill,
                    { width: "150%" },
                    animatedStyle,
                ]}
            >
                <LinearGradient
                    angle={30}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={shimmerColors}
                    style={StyleSheet.absoluteFill}
                />
            </Animated.View>
        </View>

    );
}

export default Shimmer;