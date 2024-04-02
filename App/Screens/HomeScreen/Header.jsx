import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header({ navigation } ) {    
  return (
    <View styles={styles.container} >
    <View style={styles.heading}>
      <Text style={styles.head}>StudySpace</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
  },   
  head: {
    color: 'black',
    fontSize: 25,
    fontWeight: '700',
    color:"#5844b3"
    
  },
  heading: {
    
    paddingTop:35,
    backgroundColor: '#fff',
    paddingLeft:15
  }
});