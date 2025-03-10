import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { icons } from "@/constants";
import { usePathname } from 'expo-router';


const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

  const pathname =  usePathname();
  const [query, setQuery] = useState('');
  
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl flex-row focus:border-secondary items-center sapce-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder="Search for video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
      />
      
      <TouchableOpacity>
        <Image
          source={icons.search}
          className="w-5 h-5"
          resizeMode='contain'
        />
      </TouchableOpacity>

    </View>
  )
}

export default SearchInput;