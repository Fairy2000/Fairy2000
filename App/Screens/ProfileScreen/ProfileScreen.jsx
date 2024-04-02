import React,{useEffect, useState}from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import axios from 'axios';


const ProfileScreen = (props) => {

  
  

  return (
    <View style={styles.container}>
      
      <Avatar.Image
      size={155}
     source={require("../../../assets/istockphoto.jpg")}
     />
   <Text style={styles.name}>Name:</Text>
   <TouchableOpacity onPress={() => props.navigation.navigate("Home1")}>
   <Button mode='contained' style={styles.button} >LOGOUT</Button>
   </TouchableOpacity>
      <StatusBar style="auto" />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
   },
  name: {
    fontSize: 24,
    fontWeight:"bold",
    marginTop:10
   
    },
  bio:{
      margin:20,
      textAlign: 'center',
      },
  button: {
        margin:10,
        width:200
        }
});
export default ProfileScreen;