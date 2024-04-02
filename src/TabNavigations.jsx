import React from 'react'
import { View, Text ,TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DictionaryScreen from '../App/Screens/DictionaryScreen/DictionaryScreen';
import HomeScreen from '../App/Screens/HomeScreen/HomeScreen';
import QuizScreen from '../App/Screens/QuizScreen/QuizScreen';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import SearchScreen from '../App/Screens/SearchScreen/SearchScreen';
import { FontAwesome6 } from '@expo/vector-icons';
import ProfileScreen from '../App/Screens/ProfileScreen/ProfileScreen';



const Tab = createBottomTabNavigator();

export default function TabNavigations() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.PRIMARY
    }}>
    <Tab.Screen name='Home' component={HomeScreen}  
    options={{ 
      tabBarLabel:({color})=>(
        <Text style={{color:color , fontSize:12}}>Home</Text>
      ),
      tabBarIcon:({color,size})=>(
       <Ionicons name="home-sharp" size={24} color={color} />
      )
    }}
      />
    <Tab.Screen name='Dictionary' component={DictionaryScreen}   
    options={{ 
      tabBarLabel:({color})=>(
        <Text style={{color:color , fontSize:12}}>Dictionary</Text>
      ),
      tabBarIcon:({color,size})=>(
       <Entypo name="open-book" size={24} color={color} />
      )
    }}
     />
     <Tab.Screen name='SearchBar' component={SearchScreen} 
      options={{ 
      tabBarLabel:({color})=>(
        <Text style={{color:color , fontSize:12 }}>Search</Text>
      ),
      tabBarIcon:({color,size})=>(
       <FontAwesome5 name="search" size={24} color={color} />
      )
    }}
    />
     
    <Tab.Screen name='Quiz' component={QuizScreen}  options={{ 
      
      tabBarLabel:({color})=>(
       
        <Text style={{color:color , fontSize:12}}>Quiz</Text>
        
      ),
      tabBarIcon:({color,size})=>(
       <MaterialIcons name="quiz" size={24} color={color} />
      )
      
    }}
     />
    
     <Tab.Screen name='Bookmark' component={ProfileScreen} 
      options={{ 
      tabBarLabel:({color})=>(
        <Text style={{color:color , fontSize:12}}>Profile</Text>
      ),
      tabBarIcon:({color,size})=>(
       <FontAwesome6 name="face-smile-beam" size={24} color="black" />
      )
    }}
    />
    </Tab.Navigator>
    
  );
}

