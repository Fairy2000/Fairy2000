import React, { useEffect, useState } from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkblue} from './Constants';
import Field from './Field';

const Verification = ({ navigation , route}) => {
  const{userdata} = route.params;
  

  const [errormsg , setErrormsg ] = useState(null);
  const [userCode , setUserCode] = useState('');
  const [actualCode, setActualcode] = useState(null);

  useEffect(() => {
    setActualcode(userdata[0]?.VerificationCode);

  },[])

  const Sendtobackend = () => 
  {
   // console.log(userCode);
   //console.log(actualCode);
   if(userCode == ''){
    setErrormsg('Please enter the code');
    return;
   }
   else if(userCode == actualCode){
    const fdata = {
      email: userdata[0]?.email, 
      password: userdata[0]?.password,
      name: userdata[0]?.name,
      dob: userdata[0]?.dob,
    }
    fetch('http://192.168.29.246:3000/signup', {
      method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fdata)
    })
    .then(res => res.json())
    .then(data => {
      if (data.message == 'User registered successfully')
      {//alert(data.message);
        navigation.navigate('Login')
    }
    else{
      alert("Something went wrong !! Try Signing Up Again");
    }


    })
  }

   else if(userCode != actualCode){
    setErrormsg('Incorrect code');
    return;
   }
 
  }

  
  

  return (
    <Background>
      <View style={{alignItems: 'center', width: 360}}>
        <Text
          style={{
            color: 'white',
            fontSize: 45,
            fontWeight: 'bold',
            alignItems: 'center',
            marginVertical: 50,
            paddingTop:30,
            paddingBottom:30
          }}>
          Verification
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 600,
            width: 360,
            borderTopLeftRadius: 80,
            paddingTop: 90,
            alignItems: 'center',
          }}>
          
          
          
          <Text
            style={{
              color: 'grey',
              fontSize: 15,
              fontWeight: 'bold',
              marginBottom: 30,
              
            }}>
            Enter Verification Code sent to your email
          </Text>


          {
            errormsg ? <Text style={{color: 'red' , fontSize: 15 , textAlign: "center",  }}>{errormsg}</Text> : null
          }
          <Field
            placeholder="Enter Verification Code"
            secureTextEntry={true}
            onChangeText={(text) => setUserCode(text)}
            onPressIn={() => setErrormsg(null)}
          />
           
           <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 20}}>

          </View>
          
          
          <Btn textColor='white' bgColor={darkblue} btnLabel="Verify" Press={() => { Sendtobackend();} } />

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

export default Verification;