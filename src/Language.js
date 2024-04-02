import React from 'react';
import {View, Text} from 'react-native';
import Bg from './Bg';
import Btn from './Btn';
import {blue} from './Constants';


const Language = (props) => {
  return (
    <Bg>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            
            height: 600,
            width: 360,
            paddingTop: 80,
            marginVertical: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold', marginBottom: 50}}>
            Choose a Language
          </Text>
          <Btn textColor='white' bgColor={blue} btnLabel="English" Press={() => props.navigation.navigate("TabNavigations")}/>
          <Btn textColor='white' bgColor={blue} btnLabel="Hindi" Press={() => props.navigation.navigate("QuizrunScreen")} />
        </View>
        </View>
      
    </Bg>
  );
}

export default Language;