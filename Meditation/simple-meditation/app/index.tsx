import React from 'react';
import { Image, StyleSheet, Platform, View, Text }from 'react-native';

export default function HomeScreen () {
  return (
    <View style={styles.container}>
    <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});