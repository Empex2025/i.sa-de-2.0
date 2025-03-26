import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg";

const HalfWidthGradientButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonWrapper}>
      <Svg height="50" width="100%" style={styles.gradientBackground}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#0D61B7" />
            <Stop offset="50%" stopColor="#2594CB" />
            <Stop offset="100%" stopColor="#3DC8DD" />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="50" fill="url(#grad)" rx="10" />
      </Svg>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "50%", // 
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginVertical: 10,
  },
  gradientBackground: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HalfWidthGradientButton;