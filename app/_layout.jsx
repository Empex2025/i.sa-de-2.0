import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from "@react-navigation/stack";
import SplashScreen from "../components/SplashScreen";
import HelpScreen from "../components/HelpScreen";
import OnboardingScreen from "./onboardingScreen"; // Your existing onboarding screen
import WelcomeScreen from "../components/WelcomeScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{
            transitionSpec: {
              open: TransitionSpecs.FadeInFromBottomAndroidSpec,
              close: TransitionSpecs.FadeOutToBottomAndroidSpec,
            },
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="HelpScreen" component={HelpScreen} options={{
          headerShown: false,
          navigationOptions: {
           header: ({ goBack }) => ({
           left: <Left onPress={goBack} />,
          }),
        },
        }} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    
  );
};

export default App;