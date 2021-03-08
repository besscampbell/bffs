import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {questSet} from '../questions';

const ResponseDetails = ({ response }) => {
  
  return (
      <View style={styles.container}>
        <Text style={styles.text1}>{questSet[(response.question-1)].question}</Text>
        <Text style={styles.text2}>{response.response}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fadadd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
  },
  text1: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 20,
    flex: 1,
    paddingTop: 20
  },
  text2: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 20,
    flex: 2, 
  },
});

export default ResponseDetails