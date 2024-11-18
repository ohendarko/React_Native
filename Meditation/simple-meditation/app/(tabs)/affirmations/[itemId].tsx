import { View, Text,StyleSheet, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, router } from 'expo-router';
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();

  const [affirmation,  setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    for (let idx = 0;  idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationsData = AFFIRMATION_GALLERY[idx].data;
      
      const affirmationToStart= affirmationsData.find((a) => a.id === Number(itemId));

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);

        const affirmationsArray = affirmationToStart.text.split(".");

        //Remove the last element if it's an empty string
        if (affirmationsArray[affirmationsArray.length - 1] === '') {
          affirmationsArray.pop();
        }

        setSentences(affirmationsArray);

        return;
      }
    }
  }, []);

  return (
    <View style={styles.view}>
      <ImageBackground
        source={affirmation?.image}
        resizeMode='cover'
        style={styles.flex}
        >
          <AppGradient colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.9)"]}>

            <Pressable onPress={() => router.back()}style={styles.pressable}>
              <AntDesign name="leftcircleo" size={40} color="white" />
            </Pressable>

            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>

              <View style={styles.viewsub}>              
                <View style={styles.subView}>
                  {sentences.map((sentence, idx) => ( 
                    <Text key={idx} style={styles.subViewText}>
                      {sentence}.
                    </Text>
                  ))}
                </View>
              </View>

            </ScrollView>

          </AppGradient>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  view: {
    display: "flex",
    flex: 1,
  },
  flex:{
    display: "flex",
    flex: 1
  },
  pressable: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 200
  },
  scrollView: {
    marginTop: 20,
    display: "flex",
  },
  viewsub: {
    height: "60%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  subView:  {
    height: "auto",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
  subViewText: {
    color:"white",
    fontWeight: "600",
    fontSize: 35,
    margin: 3,
    textAlign: "center"
  },
  scrollViewContent: {
    flexGrow: 1, // Ensures ScrollView content grows and fills the screen
    justifyContent: 'center', // Applies justifyContent properly to the content container
    paddingVertical: 20, // Optional: add some padding for better UI
  }
})


export default AffirmationPractice;