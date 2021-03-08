import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Response from '../components/Response'
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';


const ResponseScreen = ({navigation, props}) => {
  useFirestoreConnect([
    {collection: 'responses'}
  ]);
  const responses = useSelector(state => state.firestore.ordered.responses);


  const handleSelectedResponse = (id) => {
    const responseFromList = responses.filter(response => response.id === id);
    const selectedResponse= responseFromList[0]
    navigation.navigate('Details', {response: selectedResponse});
  }

  if(isLoaded(responses)){
    return (
      <View style={styles.container}>
        <FlatList
          data={responses}
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
      <View>
        <Text>Loading...</Text>
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
});

export default ResponseScreen;