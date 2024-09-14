import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Content from './Content';

const AppGradient = ({ children, colors }: {children: any; colors: string[]}) => {
  return (
    <LinearGradient colors={colors} style={styles.flex}>
      <Content>{children}</Content>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


export default AppGradient;