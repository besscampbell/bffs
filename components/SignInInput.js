import React, {useState} from 'react';
import {TextInput, View, Button, Text} from 'react-native';
import firebase, { auth } from 'firebase/app';


const SignInInput = (props) => {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const handleEmailInput = (email) => {
    setEmail(email);
  }
  const handlePasswordInput = (password) => {
    setPassword(password);
  }

  // function doSignUp () {
  //   if(!email){
  //     setError("Email required *");
  //     setValid(false);
  //     return;
  //   } else if (!password && password.trim() && password.length > 6){
  //     setError("Weak password, minimum 5 chars");
  //     setValid(false);
  //     return;
  //   } else if (!isValidEmail(email)){
  //     setError("Invalid Email");
  //     setValid(false);
  //     return;
  //   }

  //   doCreateUser(email, password);
  // }

  const doCreateUser = async (email, password) => {
    try{
      let feedback = await auth().createUserWithEmailAndPassword(email, password)
      if(feedback){
        console.log("Success!", feedback)
      }
    } catch(e) {
      console.error(e.message)
    }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={handleEmailInput}
        value={email}
        maxLength={35}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={handlePasswordInput}
        value={password}
        maxLength={35}
      />
      <Button
          style={styles.button}
          title="Sign In"
          onPress={()=> doCreateUser(email, password)}
        />
    </View>
  );
}

export default SignInInput;