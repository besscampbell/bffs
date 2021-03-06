import React, { useState } from 'react';
import {TextInput, StyleSheet, View, Button} from 'react-native';

const Input = (props)=> {
  const [response, setResponse]= useState('');
  const handleResponseInput = response => {
    setResponse(response);
  }

  return(
    <View>
      <TextInput
        {...props}
        placeholder="Share here..."
        onChangeText={handleResponseInput}
        value={response}
        maxLength={600}
        multiline
        numberOfLines={6}
      />
      <Button
        title="Send to your friend"
        onPress={()=>props.onAddResponse(response)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
})

export default Input