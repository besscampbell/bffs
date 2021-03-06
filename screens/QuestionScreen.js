import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import Questions from '../components/Questions';
import Input from '../components/Input'
import {useFirestore} from 'react-redux-firebase';



const QuestionScreen = ({navigation}) => {
  // const question = state.question
  const firestore = useFirestore();

  const handleAddResponse = (response) => {
    try{
      console.log(response);
      firestore.collection('responses').add(
        {
          response: response,
          question: 1
        })
        .then(navigation.navigate('HomeScreen')
      );
    } catch(error){
      console.log(error);
    }
  }

  return(
    <View style={styles.container}>
      <Questions/>
      <Input
        onAddResponse={handleAddResponse}

      />
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
});

export default QuestionScreen;