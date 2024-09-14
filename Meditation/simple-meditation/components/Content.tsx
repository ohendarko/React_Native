import { View, Text, StyleSheet } from 'react-native';
import React, { Children } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Content = ({children}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingVertical: 3,
    paddingHorizontal: 5
  }
})

export default Content;