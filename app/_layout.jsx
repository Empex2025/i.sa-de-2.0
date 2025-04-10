import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionSpecs, CardStyleInterpolators } from "@react-navigation/stack";
import HelpScreen from "../components/HelpScreen";
import OnboardingScreen from "./onboardingScreen"; // Your existing onboarding screen
import SignInOptionsScreen from "../components/SigninOptionsScreen";
import SplashIntroScreen from "./splashIntroScreen";
import MainSplashScreen from "../components/MainSplashScreen";
import WelComeScreen2 from "../components/WelComeScreen2";
import IntroPagination from "../components/Intro/IntroPagination";
import IntroPagination01 from "../components/Intro/IntroPagination01";

const Stack = createStackNavigator();

const App = () => {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false , animation: 'fade'}}>
        
        <Stack.Screen name="SplashIntroScreen"  component={SplashIntroScreen}/>
        <Stack.Screen name="MainSplashScreen"  component={MainSplashScreen}/>  
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
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
        <Stack.Screen name="WelComeScreen2" component={WelComeScreen2} />
        <Stack.Screen name="IntroPagination" component={IntroPagination} />
        <Stack.Screen name="IntroPagination01" component={IntroPagination01} />
        <Stack.Screen name="SigninOptionsScreen" component={SignInOptionsScreen} 
        options={{
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 2500 } },
            close: { animation: 'timing', config: { duration: 2500 } },
          }
        }}
        />
      </Stack.Navigator>
    
  );
};

export default App;