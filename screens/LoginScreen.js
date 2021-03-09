import React from 'react';
import firebase, { auth } from 'firebase/app';
import SignInInput from '../components/SignInInput';
import {View, StyleSheet, Platform, StatusBar} from 'react-native';

const Login = () => {
  function doSignUp () {
    if(!email){
      setError("Email required *");
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6){
      setError("Weak password, minimum 5 chars");
      setValid(false);
      return;
    } else if (!isValidEmail(email)){
      setError("Invalid Email");
      setValid(false);
      return;
    }

    doCreateUser(email, password);
  }

  const doCreateUser = async (email, password) => {
    try{
      let feedback = await auth().createUserWithEmailAndPassword(email, password)
      if(feedback){
        console.log(tag, "?", feedback)
      }
    } catch(e) {
      console.error(e.message)
    }
  }

  return(
    <View style={styles.container}>
      <SignInInput onAddUser={doSignUp}/>
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fadadd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
  }
});

export default Login;



