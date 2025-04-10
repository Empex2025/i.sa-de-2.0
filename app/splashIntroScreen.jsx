import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

export default function SplashIntroScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainSplashScreen'); 
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A78E2" />
      
      <View style={styles.logoWrapper}>
        <Image
          source={require('../assets/images/logo_white.png')} //Logo
          style={styles.logo}
          resizeMode="contain"
        />
       {/*  <View style={styles.textWrapper}>
          <Text style={styles.title}>i-saúde</Text>
          <Text style={styles.subtitle}>o seu assistente de saúde</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A78E2',
    justifyContent: 'center', 
    alignItems: 'center',     
  },
  logoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
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
});