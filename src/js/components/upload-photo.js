import React from 'react';
import { View, Text } from 'react-native';
import Button from './common/Button';
import styles from '../../styles';

export default function UploadPhoto ({ navigator }) {

  const nextPage = () => {
    navigator.push('navbar');
  };

  return (
    <View>
      <Text style={{ marginTop: 50 }}>Upload Photo</Text>
      <Button
        onPress={ () => nextPage() }
        buttonStyle={ styles.buttonStyle }
        buttonTextStyle={ styles.buttonTextStyle }
      >
        Skip
      </Button>
    </View>
  );
}
