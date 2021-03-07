import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Response from '../components/Response'
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';

const ResponseScreen = ({navigation}) => {
  useFirestoreConnect([
    {collection: 'responses'}
  ]);
  const responses = useSelector(state => state.firestore.ordered.responses);
  console.log(responses);

  if(isLoaded(responses)){
    return (
      <View style={styles.container}>
        {/* <Text>
          {responses.map((element) => {
            return <Response
              response={element.response}
              question={element.question}
              id={element.id}
            />
          })}
        </Text> */}
        <FlatList
          data={responses}
          renderItem={itemData => (
          <Response
            question={itemData.item.question}
            response={itemData.item.response}
            id={itemData.item.id}
            onToDetails={()=> navigation.navigate('Details')}/>)}
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