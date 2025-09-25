import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType, StyleProp, ImageStyle } from "react-native";


interface IAppUriImage {
  icon: string
  iconStyle?: StyleProp<ImageStyle>
}

const AppUriImage = ({ icon, iconStyle }: IAppUriImage) => {

  if (!icon) {
    return null
  }

  const iconUrl = icon.startsWith("http") ? icon : `https:${icon}`;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: iconUrl }}
        style={[styles.icon, iconStyle]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 64,
    height: 64,
  },
});

export default AppUriImage;