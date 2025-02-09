import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/home/HomeScreen";
import ObjectRecognitionScreen from "../screens/home/ObjectRecognitionScreen";
import TextRecognitionScreen from "../screens/home/TextRecognitionScreen";
import NavigationAssistanceScreen from "../screens/home/NavigationAssistanceScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ObjectRecognition" component={ObjectRecognitionScreen} />
        <Stack.Screen name="TextRecognition" component={TextRecognitionScreen} />
        <Stack.Screen name="NavigationAssistance" component={NavigationAssistanceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
