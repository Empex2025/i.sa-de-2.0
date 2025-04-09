import React from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import logo from "./../assets/images/logo.png";
import illustration from "./../assets/images/family with a disabled child-bro 1.png";
import GradientButton from "./Buttons/GradientButton"

const WelcomeScreen = ({ navigation }) => {

  const redirectLogin = () => {

    navigation.navigate("SigninOptionsScreen");
  } 

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>i - Saúde</Text>
      </View>

      {/* Center Image */}
      <Image source={illustration} style={styles.illustration} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Primary Button with Gradient */}
         <GradientButton title={'Quero criar uma nova conta'} onPress={redirectLogin}></GradientButton>

        {/* Secondary Button */}
        <TouchableOpacity 
          style={styles.secondaryButton} 
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.secondaryButtonText}>
            Já tenho uma conta
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>Termos e Condições</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingTop: 40,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginLeft: 10,
  },
  illustration: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginTop: 60,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 80,
    alignItems: "center",
  },
  primaryButton: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff", // White text over gradient
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#1E88E5",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  secondaryButtonText: {
    color: "#333",
    fontSize: 16,
  },
  footerText: {
    position: "absolute",
    bottom: 30,
    fontSize: 14,
    color: "#777",
  },
});

export default WelcomeScreen;