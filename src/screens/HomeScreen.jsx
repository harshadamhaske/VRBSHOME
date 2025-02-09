import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to VRBSHome</Text>
      <Button title="Object Recognition" onPress={() => navigation.navigate("ObjectRecognition")} />
      <Button title="Text Recognition" onPress={() => navigation.navigate("TextRecognition")} />
      <Button title="Navigation Assistance" onPress={() => navigation.navigate("NavigationAssistance")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default HomeScreen;
