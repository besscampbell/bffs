import React, { useState } from 'react';
import {TextInput, StyleSheet, View, Button} from 'react-native';

const Input = (props)=> {
  const [response, setResponse]= useState('');
  const handleResponseInput = response => {
    setResponse(response);
  }

  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          {...props}
          style={styles.input}
          placeholder="Share here..."
          placeholderTextColor = {"#f294af"}
          onChangeText={handleResponseInput}
          value={response}
          maxLength={600}
          multiline
          numberOfLines={6}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Send to your friend"
          onPress={()=> props.onAddResponse(response)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  inputContainer: {
    paddingTop: 30,
    height: 550,
    flex: 6
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 30
  }
})

export default Input;