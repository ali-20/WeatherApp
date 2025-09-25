import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AppText from "./AppText";
import AppIcon from "./AppIcon";
import { useNavigation } from "@react-navigation/native";

type AppHeaderProps = {
    left?: () => React.ReactNode;
    title?: string | (() => React.ReactNode);
    right?: () => React.ReactNode;
    containerStyle?: ViewStyle;
    isSearch?: boolean;
    isBack?: boolean
};

const AppHeader: React.FC<AppHeaderProps> = ({ left, title, right, containerStyle, isSearch, isBack }) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={[styles.container, { paddingTop: insets.top + 20 }, containerStyle]}>

            <View style={styles.side}>
                {
                    isBack ?
                        <AppIcon icon={require('../assets/back.png')} onPress={goBack} /> :
                        left ? left() : null}
            </View>


            <View style={styles.center}>
                {
                    typeof title === "string" ?
                        <AppText variant="subheading">{title}</AppText>
                        :
                        title ? title()
                            : null
                }
            </View>


            {
                isSearch ? null :
                    <View style={styles.side}>
                        {right ? right() : null}
                    </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        paddingBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 11,



    },
    side: {
        width: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000000ff"
    }
});

export default AppHeader;