import React, { useEffect, useState, useRef } from "react";
import { View, Image, StyleSheet, Animated, Text, Dimensions } from "react-native";
import logo from "./../assets/images/logo.png";

const { width, height } = Dimensions.get("window");

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Efeito de fade
  const logoPositionX = useRef(new Animated.Value(0)).current;
  const logoPositionY = useRef(new Animated.Value(0)).current;
  const titlePositionX = useRef(new Animated.Value(0)).current;
  const titlePositionY = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(1)).current; // **New: Logo scaling**

  const [activeDot, setActiveDot] = useState(0);
  const totalDots = 5;

  useEffect(() => {
    // paginação animada -  0.6s
    const interval = setInterval(() => {
      setActiveDot((prev) => {
        if (prev < totalDots - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 600);

    // Inicia a animação depois que a paginação termina
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(logoPositionX, {
          toValue: -width / 2 + 60, // move a logo pra esquerda
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(logoPositionY, {
          toValue: -height / 3 + 50, // move a logo pra cima
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(titlePositionX, {
          toValue: -width / 3 + 30, // Move o título para baixo
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(titlePositionY, {
          toValue: height / 2.5 - 80, // 
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(logoScale, {
            toValue: 0.5, // **Vai reduzindo a logo pra metade do tamanho na transição
            duration: 800,
            useNativeDriver: true,
          }),
      ]).start(() => {
        // Efeito de fade após a transição
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          navigation.replace("OnboardingScreen");
        });
      });
    }, totalDots * 600); // Total 3s before transition starts

    return () => clearInterval(interval);
  }, [navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Logo - animação */}
      <Animated.Image
        source={logo}
        style={[
          styles.logo,
          { 
            transform: [
              { translateX: logoPositionX }, 
              { translateY: logoPositionY }, 
              { scale: logoScale } // **Compressão da imagem**
            ] 
          },
        ]}
      />

      {/* "i - Saúde" - alinhado abaixo da logo */}
      <Animated.Text
        style={[
          styles.title,
          { transform: [{ translateX: titlePositionX }, { translateY: titlePositionY }] },
        ]}
      >
        i - Saúde
      </Animated.Text>

      {/* Pagination dots - BELOW TITLE */}
      <View style={styles.pagination}>
        {Array.from({ length: totalDots }).map((_, index) => (
          <View
            key={index}
            style={[styles.dot, activeDot >= index ? styles.activeDot : styles.inactiveDot]}
          />
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    position: "absolute",
    top: height / 2 - 145, // centro da tela
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#041422",
    position: "absolute",
    top: height / 2 - 30, // texto abaixo da logo
  },
  pagination: {
    position: "absolute",
    top: height / 2 + 30, // paginação abaixo do título
    flexDirection: "row",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#1E88E5",
  },
  inactiveDot: {
    backgroundColor: "#B0BEC5",
    opacity: 0.5,
  },
});

export default SplashScreen;