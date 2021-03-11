import React, { useState } from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const EmailInput = ({placeholderText, buttonText, onAddResponse}, props)=> {
  const [response, setResponse]= useState('');
  const handleResponseInput = response => {
    setResponse(response);
  }

  return(
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          // {...props}
          style={styles.input}
          // placeholder="Share here..."
          textAlign={'center'}
          placeholder={placeholderText}
          placeholderTextColor = {"#f294af"}
          onChangeText={handleResponseInput}
          value={response}
          autoCapitalize={'none'}
          // maxLength={600}
          // multiline
          // numberOfLines={6}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={()=> onAddResponse(response)}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // justifyContent: 'space-between',
  },
  inputContainer: {
    // backgroundColor: "white",
    paddingTop: 150,
    alignItems: 'center',
    // height: ,
    // flex: 
  },
  buttonText: {
    fontFamily: 'Palatino',
    color: '#fadadd',
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
  buttonContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: "white",
    borderRadius: 25,
    width: 300,
    height: 50,
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 30,
    alignItems: 'center',
  }
});

export default EmailInput;