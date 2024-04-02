import * as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Main';
import Home1 from './src/Home1';
import Signup from './src/Signup';
import Login from './src/Login';
import Verification from './src/Verification';
import Language from './src/Language';
import TabNavigations from './src/TabNavigations';
import QuizScreen from './App/Screens/QuizScreen/QuizScreen';
import QuizrunScreen from './App/Screens/QuizScreen/QuizrunScreen';

import ProfileScreen from './App/Screens/ProfileScreen/ProfileScreen';



const Stack = createNativeStackNavigator();

const App = () => {

  

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Home1" component={Home1} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
       
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="TabNavigations" component={TabNavigations} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} />
        <Stack.Screen name="QuizrunScreen" component={QuizrunScreen} />
        
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;