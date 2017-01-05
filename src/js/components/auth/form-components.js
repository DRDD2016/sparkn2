import React from 'react';
import { TextInput } from 'react-native';
import styles from '../../../styles';


export function FormTextInput ({ input: { value, onChange } }) {
  return (
    <TextInput
      style={ styles.inputStyle }
      onChangeText={ text => onChange(text) }
      value={ value }
      type="text"
    />
  );
}

export function FormPasswordInput ({ input: { value, onChange } }) {
  return (
    <TextInput
      style={ styles.inputStyle }
      onChangeText={ text => onChange(text) }
      value={ value }
      type="password"
      secureTextEntry
    />
  );
}
