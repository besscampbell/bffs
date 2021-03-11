import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Response from '../components/Response'
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import { auth } from "firebase/app";

const ResponseScreen = ({navigation, props}) => {
  const thisUser = auth().currentUser.uid
  const myResponsesRedux = 'myResponses'
  console.log(thisUser);
  useFirestoreConnect([
    // {collection: 'responses'},
    {
      collection: 'responses',
      where: [['user', '==', thisUser]],
      storeAs: myResponsesRedux,
    }
  ]);
  // const responses = useSelector(state => state.firestore.ordered.responses);
  const myResponses = useSelector(state => state.firestore.ordered[myResponsesRedux]);
  const mappedResponses = myResponses.map(function(el, i){
    return  {key: el.id, 
            question: el.question,
            user: el.user,
            response: el.response,
            id: el.id };
  });
  mappedResponses.sort(function(a,b) {
    return a.question - b.question;
  });



  const handleSelectedResponse = (id) => {
    const responseFromList = myResponses.filter(response => response.id === id);
    const selectedResponse= responseFromList[0]
    navigation.navigate('Details', {response: selectedResponse});
  }

  if(isLoaded(mappedResponses)){
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.text}
          data={mappedResponses}
          keyExtractor={itemData => itemData.id}
          renderItem={itemData => (
          <Response
            question={itemData.item.question}
            response={itemData.item.response}
            id={itemData.item.id}
            onToDetails={handleSelectedResponse}/>)}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fadadd',
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around"
  },
  text: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 20
  }
});

export default ResponseScreen;