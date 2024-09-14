import { View, Text, TouchableOpacity, StyleSheet, TextStyle } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: TextStyle;
  containerStyles?: TextStyle;
}

const CustomButton = ({ onPress, title, textStyles= {}, containerStyles= {} }: CustomButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7}
      style={[styles.touchableOpacity, containerStyles]}
      onPress={onPress}>
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: 'white',
    borderRadius: 20,
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 35
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
  },
  
})


export default CustomButton;

