import React from 'react';
import {StyleSheet} from 'react-native';
import Photo from './Photo';
import {View, Text, TouchableOpacity} from 'react-native';


const Main = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("Home1")}>
    <Photo>
      <View style={{ marginHorizontal: 56, marginVertical: 340, }}>
    
      
      <Text style={{ color: 'white', fontSize: 40,   }}>StudySpace</Text>
      
  
      </View>
    </Photo>
    </TouchableOpacity>
  );
}



export default Main;