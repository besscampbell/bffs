import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Response = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.response}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Response;