import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native'

 

const QuizScreen = (props)=> {
  

  return (

<View style={styles.container}>

<Text style={styles.title}>Quiz Time</Text>
   
    <View style={styles.img}>
      <Image source={require('../../../assets/quiz.jpg')} 
      style={styles.banner}
      resizeMode="contain"
       />
    </View>
    <TouchableOpacity onPress={()=> props.navigation.navigate("QuizrunScreen")} style={styles.button}>
      <Text style={styles.start}>Start</Text>
    </TouchableOpacity>
  </View>
  )
 }

const styles = StyleSheet.create({
  container: {
    alignContent:'center',
    backgroundColor: '#fff',
    height: '100%',
    paddingHorizontal: 20,
  },
  banner: {
    height: 500,
    width: 500,
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#0E4CB0',
    width: '100%',  
    justifyContent: 'center',
    alignItems: 'center',  
    borderRadius: 18,
    marginBottom: 30,
  },
  start: {
    fontSize: 20,
    fontWeight: '400',
    color: '#fff',
    padding: 20,
  },
  title: {
    fontSize : 36,
    fontWeight: '600',
    backgroundColor: '#fff',
    fontStyle: 'italic',
    marginLeft:73,
    
    paddingTop: 50
  }
});


 export default QuizScreen;