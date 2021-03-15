import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, SafeAreaView} from 'react-native';
import firebase, { auth } from 'firebase/app';
import EmailInput from '../components/EmailInput'
import {useFirestore} from 'react-redux-firebase';
import {useDispatch} from 'react-redux';
import * as a from '../actions';


const AccountScreen = ({navigation}) => {
  const firestore = useFirestore();
  const dispatch = useDispatch();

  const doSignOut = () => {
    try{
      let feedback = auth().signOut()
      if(feedback){
        Alert.alert("Goodbye friend")
      }
    } catch(e){
      console.log(e);
    }
  }

  const handlePairing = (friend) => {
    try{
      const user= auth().currentUser;
      // console.log(user);
      // console.log(friend);
      // const action =  a.addFriend({
      //       friendEmail: friend,
      //       user: user.uid,
      //       id: Math.random,
      //     });
      // dispatch(action)

      firestore.collection('friends').add(
        {
          friendEmail: friend,
          user: user.uid
        })
        .then(navigation.navigate('Home'))
    } catch(error){
      console.log(error);
    }
  }


  return(
    <SafeAreaView style={styles.container}>
      <EmailInput
        style={styles.email}
        onAddResponse={handlePairing}
        buttonText="Add friend"
        placeholderText="Your friend's email"
      />
      <View style={styles.goodbye}>
        <Text style={styles.text}>Are you ready to say</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => doSignOut()}>
          <Text style={styles.buttonText}>Goodbye?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fadadd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 30
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "#e75480",
    borderRadius: 50,
    height: 50,
    width: 200,
    marginTop: 40,
    marginBottom: 10,
  },
  buttonText: {
    fontFamily: 'Palatino',
    color: '#fadadd',
    fontSize: 30
  },
  goodbye: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    flex:1,
    justifyContent: 'center',
  }
});

export default AccountScreen;