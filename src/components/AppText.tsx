import React from "react";
import { Text, TextProps, StyleSheet, TextStyle } from "react-native";

type AppTextVariant = "banner" | "heading" | "subheading" | "body" | "caption" | "label";

interface AppTextProps extends TextProps {
    variant?: AppTextVariant;
    children: React.ReactNode;
}

const AppText: React.FC<AppTextProps> = ({ variant = "body", style, children, ...rest }) => {
    return (
        <Text style={[styles[variant], style]} {...rest}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create<Record<AppTextVariant, TextStyle>>({
    banner: {
        fontSize: 54,
        fontWeight:'900'
    },
    heading: {
        fontSize: 24,
        fontWeight: "700",

    },
    subheading: {
        fontSize: 20,
        fontWeight: "600",

    },
    body: {
        fontSize: 16,
        fontWeight: "400",

    },
    caption: {
        fontSize: 14,
        fontWeight: "400",

    },
    label: {
        fontSize: 12,
        fontWeight: "400",


    },
});

export default AppText;