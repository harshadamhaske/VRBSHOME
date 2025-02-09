import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tts from 'react-native-tts';

const ObjectRecognitionScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const [recognizedObject, setRecognizedObject] = useState("No Object Detected");

  useEffect(() => {
    (async () => {
      const permission = await Camera.requestCameraPermission();
      if (permission !== 'authorized') {
        console.log('Camera permission denied');
      }
    })();
  }, []);

  const savePreference = async (value) => {
    try {
      await AsyncStorage.setItem('objectPreference', value);
      Tts.speak(`Preference saved: ${value}`);
    } catch (error) {
      console.error('Error saving preference:', error);
    }
  };

  const speakObject = () => {
    Tts.speak(`Detected: ${recognizedObject}`);
  };

  return (
    <View style={styles.container}>
      {device ? (
        <Camera
          style={styles.camera}
          device={device}
          isActive={true}
        />
      ) : (
        <Text>No camera found</Text>
      )}
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{recognizedObject}</Text>
        <Button title="Speak Object" onPress={speakObject} />
        <Button title="Save Preference" onPress={() => savePreference(recognizedObject)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 3 },
  resultContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  resultText: { fontSize: 18, fontWeight: 'bold' },
});

export default ObjectRecognitionScreen;
