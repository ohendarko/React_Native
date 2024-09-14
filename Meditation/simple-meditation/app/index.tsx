import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../components/CustomButton';


const beachImage = require('../assets/meditation-images/beach.png');

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={beachImage}
      style={{ flex: 1 }}
      resizeMode='cover'>
        <LinearGradient colors={['rgba(0,0,0,0.4)', 'rgba(0, 0, 0, 0.8)']}
          style={styles.gradient}>
          <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.textContainer}>
              <Text style={styles.safeareaviewtext}>
               Simple Meditation
              </Text>
              <Text style={styles.subtext}>
                Simplifying Meditation for Everyone
              </Text>
            </View>

            <View>
              <CustomButton onPress={() => console.log('tap')} title='Get Started' />
            </View>

            <StatusBar style="light" />
          </SafeAreaView>          
        </LinearGradient>        
      </ImageBackground>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  safeAreaView: {
    flex: 1,
    //justifyContent: 'center',
  },
  safeareaviewtext: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    paddingVertical: 7,
    justifyContent: 'space-between',
    marginTop: 10
  },
  textContainer: {
    alignItems: 'center',
  },
  subtext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
    marginTop: 3,
    flex: 0.9
  },
});


export default App;