import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Background from './Background';
import Button from './Button';
import {darkGreen, green} from './Constants';
import {NavigationProp} from '@react-navigation/native';

interface HomeProps {
  navigation: NavigationProp<any>;
}

const Home = (props: HomeProps) => {
  return (
    <Background>
      <View style={{marginHorizontal: 40, marginVertical: 100}}>
        <Text style={{color: 'white', fontSize: 64, marginBottom: 40}}>
          Let,s start codding
        </Text>
        <Button
          bgColor={green}
          TextColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Button
          bgColor="white"
          TextColor={darkGreen}
          btnLabel="SignUp"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({});
