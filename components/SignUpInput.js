import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Button, Text, Alert, StyleSheet} from 'react-native';
import firebase, { auth } from 'firebase/app';
import 'firebase/auth';


const SignUpInput = ({moveTo}) => {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [confirmPassword, setConfirmPassword]= useState('');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);


  function doSignUp () {
    if(!email){
      setError("Email required");
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
    } else if (password != confirmPassword){
      setError("Passwords do not match");
      setValid(false);
      return;
    }

    doCreateUser(email, password);
  }

  const isValidEmail = (email) => {
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    return expression.test(String(email).toLowerCase());
  }

  const doCreateUser = async (email, password) => {
    try{
      let feedback = await auth().createUserWithEmailAndPassword(email, password)
      if(feedback && feedback.user){
        Alert.alert(
          "Success ✅",
          `Account created for ${email}`,
          [
            // {
            //   text: 'Invite your bestie',
            //   onPress:() => navigation.navigate('Home')
            // },
            {
              text: 'Get Started',
              onPress: () => moveTo.navigate('Home'),
            }
          ]
        );
      }
    } catch(e) {
      console.error(e.message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize={"none"}
          keyboardType="email-address"
          onChangeText={text => {
            setError
            setEmail(text)
          }}
          error={isValid}
          value={email}
          maxLength={35}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          autoCapitalize={'none'}
          onChangeText={text =>
            setPassword(text)}
          error={isValid}
          value={password}
          maxLength={35}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Confirm Password"
          autoCapitalize={'none'}
          onChangeText={text =>
            setConfirmPassword(text)}
          error={isValid}
          value={confirmPassword}
          maxLength={35}
          clearButtonMode="always"
        />
      </View>
      {error ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
      ): null}
      {/* <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => doSignUp(email, password, confirmPassword)}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginView}>
          <Text>
            <Text style={styles.login}>Already a user? </Text>
            <Text style={styles.login2}>Login</Text>
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
  },
  inputContainer: {
    width: 350,
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 50,
    color: "#e75480",
    fontSize: 30,
    fontFamily: "Palatino"
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#e6d7ff",
    borderRadius: 25,
    height: 50,
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText:{
    fontSize: 30,
    fontFamily: "Palatino",
    color: 'grey'
  },
  loginView: {
    alignItems: 'center',
    marginTop: 40,
  },
  login: {
    height: 50,
    color: "#e75480",
    fontSize: 20,
    fontFamily: "Palatino",
    marginTop: 30,
    alignItems: 'center',
  },
  login2: {
    height: 50,
    color: "#e75480",
    fontSize: 20,
    fontFamily: "Palatino",
    marginTop: 30,
    alignItems: 'center',
    textDecorationLine: "underline"
  }
})

export default SignUpInput;