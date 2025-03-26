import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import centerImage from "./../assets/images/who-icon-center.png";
import logo from "./../assets/images/logo.png";
import arrow from "./../assets/images/Line4.png";
import cancel from "./../assets/images/cancel.png";
import { router } from "expo-router"
import { Link } from "expo-router"


const handleHelp  = () => {

  router.push("/onboardingScreen");
}
const HelpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />         
        </View>

        
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={ () => navigation.navigate("OnboardingScreen")}> 
            <Image source={cancel} style={styles.closeIcon} /> 
          </TouchableOpacity>
          
        </View>
      </View>

      
      <View style={styles.imageContainer}>
        <Text style={styles.mainTitle}>Ajuda</Text>
                
          <Text style={styles.subTitle}>Aviso de Direitos Autorais</Text>
          <Image source={arrow} style={styles.arrow} /> 
          
        <Text style={styles.description}>
          Algumas imagens utilizadas neste aplicativo são provenientes do site https://storyset.com/. 
          Todos os direitos sobre essas imagens pertencem aos seus respectivos criadores. 
          Nosso aplicativo possui apenas o direito de uso, sem qualquer reivindicação de propriedade. 
          Caso haja alguma dúvida ou solicitação relacionada aos direitos autorais, entre em contato conosco.
          </Text>
      </View>
           
        
        <TouchableOpacity style={styles.button} onPress={() => alert("Contato!")}>
          <Text style={styles.buttonText}>Entre em Contato</Text>
        </TouchableOpacity>
              
      
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
  mainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color:"#2D9CDB", 
    justifyContent:"left",
    textAlign: "left", // Left-align text
    alignSelf: "flex-start", // Move text to the left
    width: "100%", // Ensure full-width alignment
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
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#333",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
    marginVertical: 10,
    //paddingHorizontal: 3,
    lignSelf: "flex-start", // Move text to the left
    width: "100%", // Ensure fu
    color: "#2D9CDB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "right"
  },
  iconsContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    flexDirection: "row", // Stack icons vertically
    alignItems: "center",
  },
  closeIcon: {
    fontSize: 22,
    marginBottom: 20, // Space between X and ℹ️
  },
  
  imageContainer: {
    flex: 1, // Takes remaining space to center the illustration
    justifyContent: "center",
    alignItems: "center",
    bottom:100,
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
    alignItems: "center",
    marginTop: 10,
    marginLeft:80,
    width:"50%",
    bottom:40,
    borderRadius:15
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }, 
  arrow: {
    position: "absolute",
    top:255,
    right:115,
    flexDirection: "row", // Stack icons vertically
    alignItems: "center",
  },
  
});

export default HelpScreen;