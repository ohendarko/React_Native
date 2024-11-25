import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import { router, useLocalSearchParams } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

const Meditate = () => {
  const { id }   =  useLocalSearchParams();

  return (
    <View style={styles.view}>
      <ImageBackground  source={MEDITATION_IMAGES[Number(id) - 1]} resizeMode='cover'style={styles.imageBackground}>

        <AppGradient colors={["transparent", "rgba(0, 0, 0, 0.8)"]}>

          <Pressable onPress={() => router.back()} style={styles.pressable}>
          <AntDesign name="leftcircleo" size={40} color="white" />
          </Pressable>
          
        </AppGradient>
        
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flex: 1,
  },
  imageBackground: {
    display: "flex",
    flex: 1,
  },
  pressable: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 200
  },
})


export default Meditate