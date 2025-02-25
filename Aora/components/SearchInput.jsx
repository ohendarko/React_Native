import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { icons } from "@/constants";


const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl flex-row focus:border-secondary items-center sapce-x-4">
      <TextInput
        className="flex-1 text-white font-pregular text-base mt-0.5"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b78b"
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