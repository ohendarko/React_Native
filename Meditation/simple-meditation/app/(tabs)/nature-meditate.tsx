import { View, Text, StyleSheet, FlatList, Pressable, ImageBackground } from 'react-native';
import React from 'react';
import AppGradient from '@/components/AppGradient';
import { StatusBar } from 'expo-status-bar';

import {MEDITATION_DATA} from '@/constants/Meditation-data';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient';

const NatureMeditate = () => {
  return (
    <View style={styles.container}>
      <AppGradient colors={["#161e2e", "#0a4d4a", "#766e67"]}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Welcome Ohene</Text>
          <Text style={styles.secondaryText}>Start your meditation practice today</Text>
        </View>

        <View>
          <FlatList
            data={MEDITATION_DATA}
            style={styles.flatList}
            keyExtractor={(item)=>item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => console.log('press')}
                  style={styles.pressable}
                >
                  <ImageBackground
                    source={MEDITATION_IMAGES[item.id - 1]}
                    resizeMode='cover'
                    style={styles.imageBackground}
                  >
                    <LinearGradient colors={['transparent', "rgba(0, 0, 0, 0.8)"]}
                    style={styles.textGradient}>

                    <Text style={styles.imageText}>{item.title}</Text>
                    </LinearGradient>
                  </ImageBackground>
                </Pressable>
              )
            }}
          />
        </View>

      </AppGradient>

      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    marginBottom: 6,
  },
  text: {
    color: "white",
    marginBottom: 3,
    textAlign: 'left',
    fontSize: 40,
    fontWeight: "600",
  },
  secondaryText: {
    color: "white",
    fontSize: 20,
    fontWeight: "300",
  },
  statusBar: {
    color: "white",
  },
  flatList: {
    marginBottom: 90,
  },
  pressable: {
    height: 200,
    margin: 10,
    overflow: "hidden"
  },
  imageBackground: {
    flex: 1,
    borderRadius: 5,
    justifyContent: "center"
  },
  imageText: {
    color: "white",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },
  textGradient: {
    flex: 1,
    justifyContent: "center",
  }
})

export default NatureMeditate;