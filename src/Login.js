import React, { useState } from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkblue} from './Constants';
import Field from './Field';

const Login = (props) => {
   

  const [fdata, setFdata] = useState({
    email: '',
    password: ''
  })
   
  const [errormsg , setErrormsg ] = useState(null);

  const Sendtobackend = () => 
  {
    //console.log(fdata);
    if(fdata.email == '' || fdata.password == ''){
      setErrormsg('All fields are required');
      return;
    }

    else{
      fetch('http://192.168.29.246:3000/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fdata)
      })
      .then(res => res.json()).then(
        data =>{
        //console.log(data);
        if (data.error){
          setErrormsg(data.error);
        }
        else{
          //alert('Login successful');
          props.navigation.navigate('Language');
        }
      })
    }
    
  }     

  return (
    <Background>
      <View style={{alignItems: 'center', width: 360}}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginVertical: 50,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 600,
            width: 360,
            borderTopLeftRadius: 80,
            paddingTop: 80,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: darkblue, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>

          {
            errormsg ? <Text style={{color: 'red' , fontSize: 15 , textAlign: "center",  }}>{errormsg}</Text> : null
          }


          <Field
            placeholder="Email"
            keyboardType={'email-address'}
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({...fdata,email:text})}
          />
          <Field placeholder="Password" secureTextEntry={true} 
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({...fdata,password:text})}
          />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 120}}>
             <TouchableOpacity onPress={() => alert("Enter new password")}>
            <Text style={{color: darkblue, fontWeight: 'bold', fontSize: 16, }}>
              Forgot Password ?
            </Text>
            </TouchableOpacity>
          </View>
          <Btn textColor='white' bgColor={darkblue} btnLabel="Login" Press={() => { Sendtobackend();} } />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{color: 'grey', fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkblue, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}

export default Login;