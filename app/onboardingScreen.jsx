import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import centerImage from "./../assets/images/who-icon-center.png";
import logo from "./../assets/images/I-saude1.png";
import info from "./../assets/images/info.png";
import cancel from "./../assets/images/cancel.png";
import GradientButton from "../components/Buttons/GradientBtnExplore"


const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>i - Saúde</Text>
        </View>

        
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={ () => navigation.replace("WelcomeScreen")}>
           <Image source={cancel} style={styles.closeIcon} /> 
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.replace("HelpScreen") }>
           
             <Image source={info} style={styles.icon} />
           
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.imageContainer}>
        <Image source={centerImage} style={styles.illustration} />
      </View>

      
      <View style={styles.bottomContainer}>
        <Text style={styles.mainTitle}>i - Saúde</Text>
        <Text style={styles.description}>
          Bem-vindo! Agora, vamos te apresentar seu futuro assistente de saúde.
          Esperamos ser uma parte importante do seu dia a dia!
        </Text>

        
        {/* <TouchableOpacity style={styles.button} onPress={() => alert("Página em construção!")}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity> */}

       <GradientButton title={'Explore'}></GradientButton>

        
        <View style={styles.pagination}>
          {Array.from({ length: 5 }).map((_, index) => (
            <View key={index} style={[styles.dot, index === 0 ? styles.activeDot : styles.inactiveDot]} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#333",
  },
  iconsContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "column", // Stack icons vertically
    alignItems: "center",
  },
  closeIcon: {
    fontSize: 22,
    marginBottom: 20, // Space between X and ℹ️
  },
  infoIcon: {
    fontSize: 22,
  },
  imageContainer: {
    flex: 1, // Takes remaining space to center the illustration
    justifyContent: "center",
    alignItems: "center",
  },
  illustration: {
    width: "100%",
    height: "60%", // Ensures it takes up a large part of the screen
    resizeMode: "contain",
  },
  bottomContainer: {
    alignItems: "center",
    paddingBottom: 40, // Extra padding for spacing
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1E88E5",    
    justifyContent:"left",
    textAlign: "left", // Left-align text
    alignSelf: "flex-start", // Move text to the left
    width: "100%", // Ensure full-width alignment
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "left",
    marginVertical: 10,
    //paddingHorizontal: 3,
    lignSelf: "flex-start", // Move text to the left
    width: "100%", // Ensure full-width alignment
  },
  button: {
    backgroundColor: "#1E88E5",
    paddingVertical: 15,
    paddingHorizontal: 40,
    width: "50%", // Full width button
    alignItems: "center",
    marginTop: 20,
    borderRadius:15
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  pagination: {
    flexDirection: "row",
    marginTop: 10,
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

export default OnboardingScreen;