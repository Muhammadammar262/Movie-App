import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, TextInput} from 'react-native';
import Background from './Background';
import {darkGreen} from './Constants';
import Button from './Button';
import {NavigationProp} from '@react-navigation/native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../firebase/firebase.config';

interface SignUpProps {
  navigation: NavigationProp<any>;
}

const SignUp = (props: SignUpProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        Alert.alert('User Account Created Successfully');
        props.navigation.navigate('Login');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };
  return (
    <Background>
      <View style={{alignItems: 'center', width: '100%'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
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
            height: 700,
            width: 360,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Email / Username"
            keyboardType={'email-address'}
            secureTextEntry={true}
            value={email}
            onChangeText={text => setEmail(text)}
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 20,
              width: '78%',
              backgroundColor: 'rgb(220,220, 220)',
              marginVertical: 10,
            }}
            placeholderTextColor={darkGreen}></TextInput>

          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            style={{
              borderRadius: 100,
              color: darkGreen,
              paddingHorizontal: 20,
              width: '78%',
              backgroundColor: 'rgb(220,220, 220)',
              marginVertical: 10,
            }}
            placeholderTextColor={darkGreen}></TextInput>
          {/* <Field
            name="fname"
            value={values.fname}
            updateInputVal={updateInputval}
          /> */}
          {/* <Field
            name="lname"
            value={values.lname}
            updateInputVal={updateInputval}
          /> */}
          {/* <Field
            keyboardType={'email-address'}
            name="email"
            value={values.email}
            updateInputVal={updateInputval}
          /> */}

          {/* <Field
            name="password"
            value={values.password}
            updateInputVal={updateInputval}
            secure={true}
          /> */}
          {/* <Field
            name="cpassword"
            value={values.cPassword}
            updateInputVal={updateInputval}
            secure={true}
          /> */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16,
              marginTop: 275,
            }}>
            <Text style={{color: 'grey', fontSize: 14}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 14}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '78%',
              paddingRight: 16,
              marginBottom: 10,
            }}>
            <Text style={{color: 'grey', fontSize: 14}}>and </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 14}}>
              Privacy Policy
            </Text>
          </View>
          <Button
            TextColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            // Press={() => {
            //   Alert.alert('Account created');
            //   props.navigation.navigate('Login');
            // }}
            Press={() => signUp()}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default SignUp;
