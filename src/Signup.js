import React , {useState} from 'react';
import {View, Text, Touchable, TouchableOpacity } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkblue} from './Constants';
import Field from './Field';

const Signup = (props) => {

 
  const [fdata, setFdata] =useState({
    name : '',
    email: '',
    password: '',
    cpassword: '',
    dob: ''
  })

  const [errormsg , setErrormsg ] = useState(null);

  const Sendtobackend = () => 
  {
    //console.log(fdata);
    if(fdata.name == '' ||
        fdata.email == '' ||
         fdata.password == '' ||
         fdata.cpassword == '' ||
         fdata.dob == ''){
          setErrormsg('All fields are required');
          return;
    }

    else{
      if(fdata.password != fdata.cpassword)
      {
        setErrormsg('Password and Confirm Password must be same');
        return;
      }
      else
      {
        fetch('http://192.168.29.246:3000/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fdata)
        })
         
        .then(res => res.json()).then(
          data =>{
            //console.log(data);
            if (data.error == 'Invalid Credentials'){
              setErrormsg('Account already exists')
            }
            else if (data.message == "Verification Code Sent to your Email"){
            // console.log(data.udata);
             //alert(data.message);
             props.navigation.navigate('Verification' , { userdata:data.udata})
             
            }
          }
        )

      }
        
    }  
  }

  return (
    <Background>
  
      <View style={{alignItems: 'center', width: 360 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginTop: 50,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 600,
            width: 360,
            borderTopLeftRadius: 80,
            paddingTop: 40,
            alignItems: 'center',
          }}>

          {
            errormsg ? <Text style={{color: 'red' , fontSize: 15 , textAlign: "center",  }}>{errormsg}</Text> : null
          }
         
          <Field
            placeholder="Username"
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({...fdata,name:text})}
          />
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
          <Field placeholder="Confirm Password" secureTextEntry={true} 
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({...fdata,cpassword:text})}
          />
          <Field
            placeholder="DOB"
            onPressIn={() => setErrormsg(null)}
            onChangeText={(text) => setFdata({...fdata,dob:text})}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              justifyContent :"center", 
            }}>
            <Text style={{color: 'grey', fontSize: 15}}>
              By signing in, you agree to our
            </Text>
            
            
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '100%',
              marginBottom: 50
            }}>

            <Text style={{color: darkblue, fontWeight: 'bold', fontSize: 15}}>
              Terms & Conditions{" "}
            </Text>
            <Text style={{color: 'grey', fontSize: 15}}>
              and {" "}
            </Text>
            <Text style={{color: darkblue, fontWeight: 'bold', fontSize: 16}}>
             Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkblue}
            btnLabel="Signup"
            Press={() => {
              Sendtobackend();
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkblue, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </Background>
  );
}

export default Signup;