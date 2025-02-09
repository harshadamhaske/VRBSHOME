import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tts from 'react-native-tts';

const TextRecognitionScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  const [recognizedText, setRecognizedText] = useState("No Text Detected");

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
      await AsyncStorage.setItem('textPreference', value);
      Tts.speak(`Preference saved: ${value}`);
    } catch (error) {
      console.error('Error saving preference:', error);
    }
  };

  const speakText = () => {
    Tts.speak(`Recognized Text: ${recognizedText}`);
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
        <Text style={styles.resultText}>{recognizedText}</Text>
        <Button title="Speak Text" onPress={speakText} />
        <Button title="Save Preference" onPress={() => savePreference(recognizedText)} />
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

export default TextRecognitionScreen;
