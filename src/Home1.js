import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { blue, darkblue,} from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 49, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 40 }}>Let's explore  </Text>
      <Text style={{ color: 'white', fontSize: 40, marginBottom: 50 }}>the world beyond earth</Text>
      <View style={{ marginHorizontal: 8 }}>
      <Btn bgColor={blue} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Btn bgColor='white' textColor={darkblue} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
      </View>
    </Background>
  );
}

export default Home;