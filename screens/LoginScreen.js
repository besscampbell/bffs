import React from 'react';
import firebase, { auth } from 'firebase/app';
import SignUpInput from '../components/SignUpInput';
import {View, StyleSheet, Platform, StatusBar} from 'react-native';

const Login = ({navigation}) => {


  return(
    <View style={styles.container}>
      <SignUpInput moveTo={navigation}/>
    </View>
  );
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



