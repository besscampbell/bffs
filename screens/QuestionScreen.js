import React, {useEffect} from "react";
import {View, StyleSheet, ScrollView} from 'react-native';
import Questions from '../components/Questions';
import Input from '../components/Input'
import {useFirestore} from 'react-redux-firebase';
import {useSelector, useDispatch} from 'react-redux';
import * as a from '../actions';
import { auth } from "firebase";

const QuestionScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const  questionNumber = useSelector(state => state.questions);
  const firestore = useFirestore();
  const user = auth().currentUser;

  const handleNextQuestion = () => {
    const action = a.nextQuestion();
    dispatch(action);
    console.log(questionNumber)
  }

  const handleAddResponse = (response) => {
    try{

      firestore.collection('responses').add(
        {
          response: response,
          question: (questionNumber + 1),
          user: user.uid,
          email: user.email,
        })
        .then(handleNextQuestion)
        .then(navigation.navigate('Home'));
    } catch(error){
      console.log(error);
    }
  }

  return(
    <ScrollView style={styles.container}>
      <Questions onQuestion={questionNumber}/>
      <Input
        onAddResponse={handleAddResponse}
        buttonText="Send to your friend"
        placeholderText="Share here..."
        inputContainer={true}
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