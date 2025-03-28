import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "@/constants";
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { getCurrentUser, signIn } from '../../lib/appwrite';
import { Alert } from 'react-native';
import { router } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalProvider';

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    email:'',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = async () => {
      if(!form.email || !form.password) {
        Alert.alert('Error', 'Please fill in all the fields')
      }
      setisSubmitting(true);
      try {
        await signIn(form.email, form.password);
  
        const result = await  getCurrentUser();
        setUser(result);
        setIsLoggedIn(true);

        router.replace('/home')
      } catch (error) {
        Alert.alert('Error', error.message)
      } finally {
        setisSubmitting(false)
      }
      
    }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[95vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode='contain'
            className="w-[115px] h-[135px]"
          />

          <Text className="text-2xl text-white text-semibold mt-1 font-psemibold">Log in to Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-10"
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2 mt-5'>
            <Text className="text-lg text-gray-100 font-pregular">
              Don't Have an Account?
            </Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Sign Up</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn