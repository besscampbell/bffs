import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {questSet} from '../questions';

function Questions() {

  return (
    <View>
      <Text style={styles.text}>{questSet[5].question}</Text>
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