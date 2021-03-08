import React from 'react';
import ResponseDetails from '../components/ResponseDetails'
import {View, Text, StyleSheet, Platform, StatusBar} from 'react-native';
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
  },
});

export default ResponseDetailsScreen;