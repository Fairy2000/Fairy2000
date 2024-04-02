import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'

export default function SearchScreen() {
    
  return (
    <View style={styles.container}>
    <ImageBackground source={require('./../../../assets/moon2.jpg')} style={styles.img}>
        <View style={styles.bg}>
          <Text style={styles.text}>Explore the World beyond Earth</Text>
          <SearchBar  setSearchText={(value)=>console.log(value)}/>
        </View>        
    </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 35,
      fontWeight: '300'
    },
    img: {
      height: '100%',
      width: '100%',
    },
    bg: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginTop: 45
    },
    modules: {
      color: 'white',
      fontSize: 15,
      
    },
    container: {
      height: '100%',
      width: '100%'
    }
})

// container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },