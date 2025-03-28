import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import { router, useLocalSearchParams } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from '@/components/CustomButton';
import { Audio } from 'expo-av';
import { MEDITATION_DATA, AUDIO_FILES } from '@/constants/Meditation-data';
import { TimerContext } from '@/context/TimerContext';

const Meditate = () => {
  const { id }   =  useLocalSearchParams();

  const { duration: secondsRemaining, setDuration } = useContext(TimerContext);

  //const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setMeditating] = useState(false);
  const [audioSound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setPlayingAudio] = useState(false);

  useEffect(() => {
      let timerId: NodeJS.Timeout;

      //Exit
      if (secondsRemaining === 0) {
        setMeditating(false);
        return;
      }

      if (isMeditating) {
        timerId = setTimeout(() => {
            setDuration(secondsRemaining - 1);
        }, 1000)
      }


      return () => {
        clearTimeout(timerId);
      }
  }, [secondsRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      
      audioSound?.unloadAsync();
    };
  }, [audioSound]);
  

  const toggleMeditationSessionStatus = async () => {
    if (secondsRemaining === 0) setDuration(10);

    setMeditating(!isMeditating);

    await toggleSound();
  }

  const toggleSound =async () => {
    const sound = audioSound ? audioSound : await initializeSound();

    const status = await sound?.getStatusAsync();

    if (status?.isLoaded && !isPlayingAudio) {
      await sound.playAsync();
      setPlayingAudio(true);
    } else {
      await sound.pauseAsync();
      setPlayingAudio(false);
    }
  }

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

    const { sound } = await Audio.Sound.createAsync(
      AUDIO_FILES[audioFileName]
    );

    setSound(sound);
    return sound;
  };

  const handleAdjustDuration = () => {
    if (isMeditating) toggleMeditationSessionStatus();

    router.push("/(modal)/adjust-meditation-duration");
  }

  //Format the time left to ensure two digits are displayed
  const formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, "0")

  const formattedTimeSeconds = String(Math.floor(secondsRemaining % 60)).padStart(2, "0")


  return (
    <View style={styles.view}>
      <ImageBackground  source={MEDITATION_IMAGES[Number(id) - 1]} resizeMode='cover'style={styles.imageBackground}>

        <AppGradient colors={["transparent", "rgba(0, 0, 0, 0.8)"]}>

          <Pressable onPress={() => router.back()} style={styles.pressable}>
          <AntDesign name="leftcircleo" size={40} color="white" />
          </Pressable>
          
          <View style={styles.viewTwo}>
            <View style={styles.viewText}>
              <Text style={styles.text}>
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>

          <View style={styles.viewThree}>
            <CustomButton
              title="Adjust Duration"
              onPress={handleAdjustDuration}
            />
            <CustomButton
              title={isMeditating ? "Pause" : "Start Meditation"}
              onPress={toggleMeditationSessionStatus}
            />
          </View>

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
  viewTwo: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  viewText:  {
    marginHorizontal: "auto",
    borderRadius: 1000,
    width: 180,
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",

  },
  text: {
    fontSize: 35,
    color: "indigo",
    fontFamily: "Roboto-Mono",
  },
  viewThree: {
    marginBottom: 5
  }
})


export default Meditate