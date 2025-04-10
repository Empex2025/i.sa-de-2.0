import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import logo_black from '../../assets/images/logo_blacktext.png'
import illustration from '../../assets/images/World health day-rafiki 1.png'

const IntroPagination = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={logo_black}
          style={styles.logo}
        />
        
      </View>

      {/* IMagem */}
      <Image
        source={illustration} 
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Text Section */}
      <Text style={styles.heading}>O i-saúde é feito para você!</Text>
      <Text style={styles.description}>
        Vem descobrir como nossa comunidade de bem estar pode transformar seu dia a dia.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('IntroPagination01')}
        >
          <Text style={styles.primaryButtonText}>Vamos lá!</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SkipIntro')}>
          <Text style={styles.secondaryButtonText}>Pular Introdução</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroPagination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60,
    justifyContent: 'space-between',
    paddingBottom: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 12,
  },
  logo: {
    width: 205,
    height: 60,
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitle: {
    fontSize: 12,
    color: '#888',
  },
  illustration: {
    width: 400,
    height: 200,
    alignSelf: 'center',
    marginVertical: 15,
    paddingVertical:250,
    marginTop: -50,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    textAlign: 'left',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#4D7EFF',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#4D7EFF',
    fontSize: 15,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});