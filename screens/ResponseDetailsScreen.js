import React from 'react';
import ResponseDetails from '../components/ResponseDetails'
import {View, Text, StyleSheet} from 'react-native';
import questSet from '../questions';


const ResponseDetailsScreen = ({route, navigation}) => {
  const {response} = route.params;
  return(
    <View style={styles.container}>
      <ResponseDetails response={response}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fadadd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});

export default ResponseDetailsScreen;