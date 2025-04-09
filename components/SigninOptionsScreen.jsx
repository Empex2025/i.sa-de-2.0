import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";
import logo from "../assets/images/logo.png";
import walkersImage from "../assets/images/walkers.png"; // the illustration in your design
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SignInOptionsScreen = ({ navigation }) => {
  
  
    return (
        <SafeAreaView style={styles.container}>
          {/* Back Arrow */}
          <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate("WelcomeScreen")}>
            <AntDesign name="arrowleft" size={26} color="#333" />
          </TouchableOpacity>
    
          {/* Header Section */}
          <View style={styles.header}>
            <Image
              source={require('../assets/images/logo.png')} // your logo
              style={styles.logo}
            />
            <Text style={styles.title}>i - Saúde</Text>
          </View>
    
          {/* Center Illustration */}
          <View style={styles.imageContainer}>
            <Image
              source={walkersImage} // replace with your image
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>
    
          {/* Footer Buttons */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonOutline}>
              <AntDesign name="mail" size={20} color="#333" style={styles.icon} />
              <Text style={styles.buttonText}>Continuar com o Email</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.buttonOutline}>
              <AntDesign name="google" size={20} color="#EA4335" style={styles.icon} />
              <Text style={styles.buttonText}>Continuar com o Google</Text>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.buttonFacebook}>
              <FontAwesome name="facebook" size={20} color="#fff" style={styles.icon} />
              <Text style={styles.facebookText}>Continuar com o Facebook</Text>
            </TouchableOpacity>
    
            <Text style={styles.terms}>Termos e Condições</Text>
          </View>
        </SafeAreaView>
      );
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
        backArrow: {
          position: 'absolute',
          top: 15,
          left: 15,
          zIndex: 10,
        },
        header: {
          marginTop: 60,
          marginLeft: 20,
          flexDirection: 'row',
          alignItems: 'center',
        },
        logo: {
          width: 40,
          height: 40,
          resizeMode: 'contain',
        },
        title: {
          fontSize: 22,
          fontWeight: '600',
          color: '#333',
          marginLeft: 10,
        },
        imageContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        illustration: {
          width: '80%',
          height: '80%',
        },
        buttonsContainer: {
          paddingHorizontal: 20,
          paddingBottom: 30,
          gap: 12,
        },
        buttonOutline: {
          borderWidth: 1,
          borderColor: '#aaa',
          borderRadius: 12,
          paddingVertical: 14,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        },
        buttonFacebook: {
          backgroundColor: '#3b5998',
          borderRadius: 12,
          paddingVertical: 14,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        },
        icon: {
          marginRight: 10,
        },
        buttonText: {
          fontSize: 16,
          color: '#333',
        },
        facebookText: {
          fontSize: 16,
          color: '#fff',
        },
        terms: {
          marginTop: 10,
          fontSize: 13,
          color: '#777',
          textAlign: 'center',
        },
      });

export default SignInOptionsScreen;