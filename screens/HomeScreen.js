import * as React from 'react';
import {SafeAreaView, Text, Platform, StatusBar, StyleSheet, Button, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Best</Text>
        <Text style={styles.text2}>Friends</Text>
        <Text style={styles.text3}>Forever</Text>
      </View>
      <Button style={styles.button}
        title="Share your story"
        onPress={() =>
          navigation.navigate('Questions')}
        options={{
          buttonTitleStyle: {
            fontFamily: 'Palatino',
            color: '#e75480',
          }
        }}
      />
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
  // image: {
  //   flex: 2
  // }
});

export default HomeScreen;