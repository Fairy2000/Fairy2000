import React from 'react';
import {View, ImageBackground} from 'react-native';

const Photo = ({ children }) => {
  return (
    <View>
      <ImageBackground source={require("./Image/pine.webp")} style={{ height: '100%' }} />
      <View style={{ position: "absolute" }}>
        {children}
      </View>
    </View>
  );
}

export default Photo;