import React, {useEffect} from "react";
import {View, StyleSheet, ScrollView} from 'react-native';
import Questions from '../components/Questions';
import Input from '../components/Input'
import {useFirestore} from 'react-redux-firebase';
import {useSelector, useDispatch} from 'react-redux';
import * as a from '../actions';

const QuestionScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const  questionNumber = useSelector(state => state.questions);
  const firestore = useFirestore();

  const handleNextQuestion = () => {
    const action = a.nextQuestion();
    dispatch(action);
    console.log(questionNumber)
  }

  const handleAddResponse = (response) => {
    try{
      console.log(questionNumber);
      firestore.collection('responses').add(
        {
          response: response,
          question: (questionNumber + 1)
        })
        .then(handleNextQuestion)
        .then(navigation.navigate('Home')
      );
    } catch(error){
      console.log(error);
    }
  }

  return(
    <ScrollView style={styles.container}>
      <Questions style={styles.quest} onQuestion={questionNumber}/>
      <Input style={styles.input}
        onAddResponse={handleAddResponse}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fadadd',
    flex: 1,
    padding: 15,
  },
});

export default QuestionScreen;