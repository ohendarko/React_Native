import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coffee Shop</Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    text: {
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }
)

export default app