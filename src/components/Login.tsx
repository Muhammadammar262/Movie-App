import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Background from './Background';
import {darkGreen} from './Constants';
import Button from './Button';
import {NavigationProp} from '@react-navigation/native';
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth} from '../../firebase/firebase.config';

interface LoginProps {
  navigation: NavigationProp<any>;
}

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        props.navigation.navigate('Tab');
      }
    });
  }, []);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        Alert.alert('User Login Successfully');
        props.navigation.navigate('Tab');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };

  const forgetPassword = () => {
    if (email !== '') {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Alert.alert('Reset Password Email Sent Successfully');
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert(errorMessage);
        });
    } else {
      Alert.alert('Enter Valid Email Address');
    }
  };
  return (
    <Background>
      <View style={{alignItems: 'center', width: '100%'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 56,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 360,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
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
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 200,
            }}>
            <TouchableOpacity
              onPress={() => {
                forgetPassword();
              }}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>
          <Button
            TextColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => login()}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Don't have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
