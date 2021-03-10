import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import firebase, { auth } from 'firebase/app';

const LogOffScreen = () => {
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
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Are you ready to say</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => doSignOut()}>
        <Text style={styles.text}>Goodbye?</Text>
      </TouchableOpacity>
    </View>
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
    backgroundColor: "#e6d7ff",
    borderRadius: 50,
    height: 50,
    width: 200,
    marginTop: 40,
    marginBottom: 10,
  },
});

export default LogOffScreen;