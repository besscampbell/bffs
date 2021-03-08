import React from "react";
import {View, StyleSheet, ScrollView} from 'react-native';
import Questions from '../components/Questions';
import Input from '../components/Input'
import {useFirestore} from 'react-redux-firebase';



const QuestionScreen = ({navigation}) => {

  const firestore = useFirestore();

  const handleAddResponse = (response) => {
    try{
      console.log(response);
      firestore.collection('responses').add(
        {
          response: response,
          question: 2
        })
        .then(navigation.navigate('Home')
      );
    } catch(error){
      console.log(error);
    }
  }

  return(
    <ScrollView style={styles.container}>
      <Questions/>
      <Input
        onAddResponse={handleAddResponse}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fadadd',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: "space-around"
  },
});

export default QuestionScreen;