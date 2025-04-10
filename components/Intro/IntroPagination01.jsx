import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Circle } from 'react-native-svg';
import logo_green from '../../assets/images/Frame 6520.png'
import illustration from '../../assets/images/Medical care-bro 1.png'

export default function OnboardingProfessional() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Close Icon */}
      <Pressable style={styles.closeIcon} onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>✕</Text>
      </Pressable>

      {/* Logo and Tagline */}
      <View style={styles.logoContainer}>
        <Image
          source={logo_green} // Replace with correct path
          style={styles.logo}
          resizeMode="contain"
        />
       
      </View>

      {/* Illustration */}
      <Image
        source={illustration} // Replace with your image
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ideal para Profissionais de Saúde.</Text>
        <Text style={styles.subtitle}>
          Aqui <Text style={styles.highlight}>você se conecta</Text> com seus pacientes, gerencia sua agenda e{' '}
          <Text style={styles.highlight}>compartilha conhecimento</Text> em uma rede que valoriza seu trabalho.
        </Text>
        <Text style={styles.subtitle}>
          Seja, Médico, Nutricionista, Psicólogo, Enfermeiro ou outro profissional, o{' '}
          <Text style={styles.highlight}>i-saúde é o lugar certo para você!</Text>
        </Text>
      </View>

      {/* Primary Button */}
      <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('NextScreen')}>
        <Text style={styles.primaryButtonText}>Próximo →</Text>
      </Pressable>

      {/* Pagination Dots */}
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 50,
    right: 24,
    zIndex: 1,
  },
  closeText: {
    fontSize: 20,
    color: '#999',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 205,
    height: 60,
    marginBottom: 5,
  },
  tagline: {
    fontSize: 12,
    color: '#777',
  },
  illustration: {
    width: 400,
    height: 150,
    alignSelf: 'center',
    marginVertical: 15,
    paddingVertical:250,
    marginTop: -80,
  },
  textContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'left',
    marginTop: -50,
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    textAlign: 'left',
    marginBottom: 8,
  },
  highlight: {
    fontWeight: '600',
    color: '#0AB1A2',
  },
  primaryButton: {
    backgroundColor: '#00B89C',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCEDE8',
  },
  activeDot: {
    backgroundColor: '#00B89C',
  },
});