import React, {useState} from 'react';
import {TextInput, View, Button} from 'react-native';

const SignInInput = (props) => {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const handleEmailInput = (email) => {
    setEmail(email);
  }
  const handlePasswordInput = (password) => {
    setPassword(password);
  }

  return (
    <View>
      <TextInput>
        style={styles.input}
        placeholder="Email"
        onChangeText={handleEmailInput}
        value={email}
        maxLength={35}
      </TextInput>
      <TextInput>
        style={styles.input}
        placeholder="Password"
        onChangeText={handlePasswordInput}
        value={password}
        maxLength={35}
      </TextInput>
      <Button
          style={styles.button}
          title="Sign In"
          onPress={()=> props.onAddUser(email, password)}
        />
    </View>
  )
}

export default SignInInput;