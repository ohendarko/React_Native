import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery'

const Affirmations = () => {
  return (
    <View style={styles.view}>
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>
            Change your beliefs with affirmations
          </Text>
          <View style={styles.margin}>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery key={g.title} title={g.title} previews={g.data} />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  text:  {
    color: "white",
    fontSize: 30,
    margin: 10,
    marginTop: 30,
    fontWeight: "500"
  },
  margin:{
    margin: 5
  }
}
)

export default Affirmations;