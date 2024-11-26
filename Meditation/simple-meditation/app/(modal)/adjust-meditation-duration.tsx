import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useContext } from 'react';
import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import CustomButton from '@/components/CustomButton';
import { TimerContext } from '@/context/TimerContext';

const AdjustMeditationDuration = () => {

  const { setDuration } = useContext(TimerContext);

  const handlePress =  (duration: number) => {
    setDuration(duration);
      router.back();
  };

  return (
    <View style={styles.view}>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>

        <Text>Test</Text>

        <Pressable onPress={() => router.back()} style={styles.pressable}>
          <AntDesign name="leftcircleo" size={40} color="white" />
        </Pressable>

        <View style={styles.view2}>
          <Text style={styles.text}>
            Adjust your meditation duration
          </Text>

          <View style={styles.marginTop}>
            <CustomButton
              title='10 seconds'
              onPress={() => handlePress(10)}
            />
            <CustomButton
              title='5 minutes'
              onPress={() => handlePress(5 * 60)}
            />
            <CustomButton
              title='10 minutes'
              onPress={() => handlePress(10 * 60)}
            />
            <CustomButton
              title='15 minutes'
              onPress={() => handlePress(15 * 60)}
            />
          </View>
        </View>

      </AppGradient>
    </View>
  )
};



const styles = StyleSheet.create({
  view: {
    display: "flex",
    flex: 1,
    position: "relative"
  },
  pressable: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 200
  },
  view2: {
    justifyContent: "center",
    height: "80%"
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40
  },
  marginTop: {
    marginTop: 20
  }
})


export default AdjustMeditationDuration;