import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';

const Meditate = () => {
  return (
    <View style={styles.view}>
      <ImageBackground  source={MEDITATION_IMAGES[0]} resizeMode='cover'style={styles.imageBackground}>
        <AppGradient colors={["transparent", "rgba(0, 0, 0, 0.8)"]}>
          <Text>TEST</Text>
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
  }
})


export default Meditate