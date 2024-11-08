import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

const Affirmations = () => {
  return (
    <View style={styles.view}>
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>Change your beliefs with affirmations</Text>
        </ScrollView>
      </AppGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
}
)

export default Affirmations;