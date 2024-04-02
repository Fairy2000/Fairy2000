import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function SearchBar({setSearchText}) {
  const [searchInput ,setSearchInput] = useState();
  return(
    <View style={styles.container}>
      <View style={{marginTop:15}}>
      <View style={styles.search} >
        <FontAwesome name="search" size={34} color='white' />
        <TextInput 
        onChangeText={(value) => setSearchInput(value)}
        onSubmitEditing={()=>setSearchText(searchInput)}
        style= {{color: 'white'}} 
         />
      </View>
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
    search: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 2.7 ,
        borderColor: '#fff',
        padding: 10,
        borderRadius: 30,          
    },
  //   placeholder: {
  //   color: 'white'
  //  }
})