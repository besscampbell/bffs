import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useFirestore} from 'react-redux-firebase';

const Input = (props)=> {

  return(
    <TextInput
      {...props}
      maxLength={600}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
})

export default Input