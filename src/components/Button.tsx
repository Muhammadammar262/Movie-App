import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  bgColor: string;
  btnLabel: string;
  TextColor: string;
  Press: () => void;
}

export default function Button({
  bgColor,
  btnLabel,
  TextColor,
  Press,
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 300,
        paddingVertical: 5,
        marginVertical: 10,
      }}>
      <Text style={{color: TextColor, fontSize: 25, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
