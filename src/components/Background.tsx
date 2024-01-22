import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({children}: BackgroundProps) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/image/background.jpg')}
        style={{height: '100%'}}
      />
      <View style={{position: 'absolute'}}>{children}</View>
    </View>
  );
};
export default Background;
