import {StyleSheet, View, Text, ImageBackground ,Button} from 'react-native'
import React from 'react'
import Header from './Header';
import Slider from './Slider';
import Modules from './Modules';
import WallpaperManager from 'react-native-wallpaper-manager';

export default function HomeScreen() {
 
   
    
  return (
    <ImageBackground source={require('./../../../assets/homebg.jpg')} style={styles.backgroundImage}>
    <Header />
    {/* <Pagenavigators /> */}
      <View style={styles.overlay}>
        <Text style={styles.text}> News Update</Text>
      </View>
    <Modules />
      <Slider />
    </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // resizeMode: 'cover', // or 'stretch' for different resize modes
    height: '100%',
    width: '100%'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', // overlay color with transparency
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});