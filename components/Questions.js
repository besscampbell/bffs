import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {questSet} from '../questions';

function Questions({onQuestion}) {

  return (
    <View>
      <Text style={styles.text}>{questSet[onQuestion].question}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 40,
  },
})

export default Questions;