import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { FormTextInput, FormPasswordInput } from './form-components';
import styles from '../../../styles';


function Signup ({ handleSubmit, handleSubmitForm }) {

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ paddingLeft: 5 }}>First name</Text>
      <View style={ styles.row }>
        <Field name="firstname" component={ FormTextInput } />
      </View>

      <Text style={{ paddingLeft: 5 }}>Surname</Text>
      <View style={ styles.row }>
        <Field name="surname" component={ FormTextInput } />
      </View>

      <Text style={{ paddingLeft: 5 }}>Email</Text>
      <View style={ styles.row }>
        <Field name="email" component={ FormTextInput } />
      </View>

      <Text style={{ paddingLeft: 5 }}>Password</Text>
      <View style={ styles.row }>
        <Field name="password" component={ FormPasswordInput } />
      </View>
      <Text style={{ paddingLeft: 5 }}>Confirm password</Text>
      <View style={ styles.row }>
        <Field name="confirmPassword" component={ FormPasswordInput } />
      </View>

      <TouchableHighlight
        onPress={handleSubmit(handleSubmitForm)}
      >
        <Text>SIGN UP</Text>
      </TouchableHighlight>
    </View>
  );
}

export default reduxForm({ form: 'signup' })(Signup);
