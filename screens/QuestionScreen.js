import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Questions from '../components/Questions';


const QuestionScreen = () => {
  return(
    <View style={styles.container}>
      <Questions/>
      <TextInput style={styles.input}>This is where the response goes</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fadadd',
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around"
  },
  // text: {
  //   fontFamily: 'Palatino',
  //   color: '#e75480',
  //   fontSize: 40,
  //   flex: 1,
  //   justifyContent: 
  // },
  // input: {
    

  // }
});

export default QuestionScreen;