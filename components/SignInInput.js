import React, {useState} from 'react';
import {TextInput, View, Button, Text, Alert} from 'react-native';
import firebase, { auth } from 'firebase/app';
import 'firebase/auth';


const SignInInput = ({moveTo}) => {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);


  function doSignUp () {
    if(!email){
      setError("Email required *");
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6){
      setError("Weak password, minimum 5 chars");
      setValid(false);
      return;
    } else if (!isValid){
      setError("Invalid Email");
      setValid(false);
      return;
    }

    doCreateUser(email, password);
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
    <View>
      <TextInput
        label={"Email Address"}
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
      <TextInput
        label={'Password'}
        style={styles.input}
        placeholder="Password"
        autoCapitalize={'none'}
        onChangeText={text =>
          setPassword(text)}
        value={password}
        maxLength={35}
      />
      <Button
          style={styles.button}
          title="Register"
          onPress={()=> doSignUp(email, password)}
        />
    </View>
  );
}

export default SignInInput;