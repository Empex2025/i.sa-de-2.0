import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, Image, StatusBar } from 'react-native';

const MainSplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [activeDot, setActiveDot] = useState(0);
  const totalDots = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => {
        if (prev < totalDots - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          // inicia a animação depois da quarta página
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
          }).start(() => {
            navigation.replace('WelComeScreen2'); 
          });
          return prev;
        }
      });
    }, 800); // tempo da animação

    return () => clearInterval(interval);
  }, [fadeAnim, navigation]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <StatusBar barStyle="light-content" backgroundColor="#4A78E2" />
      
      <View style={styles.logoRow}>
        <Image
          source={require('../assets/images/logo_white.png')} // LOGO
          style={styles.logo}
        />
       {/*  <View style={styles.textWrapper}>
          <Text style={styles.title}>i-saúde</Text>
          <Text style={styles.subtitle}>o seu assistente de saúde</Text>
        </View> */}
      </View>

      <View style={styles.pagination}>
        {Array.from({ length: totalDots }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeDot === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A78E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 60,
    marginRight: 10,
  },
  textWrapper: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 12,
    color: '#fff',
    marginTop: 2,
  },
  pagination: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#ffffff',
  },
  inactiveDot: {
    backgroundColor: '#a8c7f5',
  },
});

export default MainSplashScreen;