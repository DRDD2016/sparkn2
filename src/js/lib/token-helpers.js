import { AsyncStorage } from 'react-native';

export function setToken (token) {
  try {
    AsyncStorage.setItem('spark_token', token);
  } catch (error) {
    console.error(error);
  }

}

export function getToken () {
  try {
    return AsyncStorage.getItem('spark_token');
  } catch (error) {
    console.error(error);
  }
}
