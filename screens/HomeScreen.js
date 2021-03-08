import * as React from 'react';
import {SafeAreaView, Text, Platform, StatusBar, StyleSheet, Button, View} from 'react-native';
import { connect } from 'react-redux';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Best</Text>
        <Text style={styles.text2}>Friends</Text>
        <Text style={styles.text3}>Forever</Text>
      </View>
      <View style={styles.buttons}>
        <Button style={styles.button}
          title="Listen"
          onPress={() =>
            navigation.navigate('Responses')}
        />
        <Button style={styles.button}
          title="Share"
          onPress={() =>
            navigation.navigate('Questions')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fadadd',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 0,
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',

  },
  text1: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 50
  },
  text2: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 60
  },
  text3: {
    fontFamily: 'Palatino',
    color: '#e75480',
    fontSize: 70
  },
  button: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    paddingBottom: 25
  }
});

// const mapStateToProps = state => {
//   return {
//     question: state.question,
//     selectedResponse: state.selectedResponse,
//     firestore: state.firestore,
//   }
// }

// export default connect(mapStateToProps)(HomeScreen);
export default HomeScreen;