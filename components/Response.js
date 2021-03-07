import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Response = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onToDetails(props.id)}>
      <View style={styles.container}>
        <Text style={styles.text}>Question {props.question}</Text>
        {/* <Text style={styles.text}> {props.response}</Text> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
  },
  text: {
    fontFamily: 'Palatino',
    color: '#e75480',
  }
})

export default Response;