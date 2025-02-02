import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import icedCoffeeImg from "@/assets/images/iced-coffee.png";

const app = () => {
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/contact" style={{ marginHorizontal: 'auto' }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>       
        </Link>
      </ImageBackground>
      
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
    image: {
      width: '100%',
      height: '100%',
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center'
    },
    title: {
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      marginBottom: 120,
    },    
    link: {
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      textDecorationLine: "underline",
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 4
    },
    button: {
      height: 60,
      borderRadius: 20,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.75)',
      padding: 6
    },   
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      padding: 4
    }   
  }
)

export default app