import React, { useTransition } from 'react';
import {TextInput} from 'react-native';
import {darkblue} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: darkblue, padding: 8, paddingHorizontal: 25, width: '78%',
      backgroundColor: 'rgb(220,220, 220)', marginVertical: 10, fontSize:16}}
      placeholderTextColor={darkblue}></TextInput>
  );
};

export default Field;