import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Response from '../components/Response'
import {useSelector, useDispatch} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import * as a from '../actions';


const ResponseScreen = ({navigation, props}) => {
  // const [selectedResponse, setSelectedResponse] = useState(null)
  const {dispatch} = useDispatch();
  useFirestoreConnect([
    {collection: 'responses'}
  ]);
  const responses = useSelector(state => state.firestore.ordered.responses);


  const handleSelectedResponse = (id) => {
    const responseFromList = responses.filter(response => response.id === id);
    const selectedResponse= responseFromList[0]
    action = a.selectRespose({
      response: selectedResponse.response,
      question: selectedResponse.question,
      id: selectedResponse.id,
    })
    dispatch(responseFromList[0]);
    navigation.navigate('Details');
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