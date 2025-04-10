import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const WelComeScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Centered Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo_blacktext.png')}
          style={styles.logo}
        />
       
      </View>

      {/* Illustration */}
      <Image
        source={require('../assets/images/doctor_celphone.png')} // Update with your actual image path
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Text Section */}
      <Text style={styles.heading}>A sua nova Rede Social favorita!</Text>
      <Text style={styles.description}>
        Conecte-se a uma comunidade que valoriza sua saúde e bem-estar. Aqui,
        você encontra apoio de profissionais com video-consultas,{' '}
        <Text style={styles.bold}>compartilha conquistas</Text> e{' '}
        <Text style={styles.bold}>gerencia sua rotina</Text> de forma integrada
        e acolhedora.
        {'\n\n'}Crie sua conta. Leva menos de 2 minutos!
      </Text>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.replace('IntroPagination')}
        >
          <Text style={styles.primaryButtonText}>Criar uma Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.secondaryButton}
        onPress={() => navigation.navigate('Login')}>
          <Text style={styles.secondaryButtonText}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelComeScreen2;

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
    color: '#ebe5e5',
  },
  illustration: {
    width: 400,
    height: 200,
    alignSelf: 'center',
    marginVertical: 15,
    paddingVertical:250,
    marginTop: -120,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    color: '#222',
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
  secondaryButton: {
    backgroundColor: '#e5ecfc',
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
    fontSize: 16,
    fontWeight: '600',
  },
});
