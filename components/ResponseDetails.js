import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResponseDetails = ({ response }) => {
  return (
      <View style={styles.container}>
        <Text></Text>
        <Text style={styles.text}>{response.response}</Text>
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
  text: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 20
  },
});

export default ResponseDetails