import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Platform, StatusBar, StyleSheet, Button, View, TouchableOpacity} from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';


const HomeScreen = ({ navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Best</Text>
        <Text style={styles.text2}>Friends</Text>
        <Text style={styles.text3}>Forever</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() =>
            navigation.navigate('Responses')}
        >
          <AntDesign name="cloudo" size={100} color="#e75480" />
          <Text style={styles.buttonText}>Listen</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() =>
            navigation.navigate('Questions')}>
          <Feather name="sun" size={100} color="#e75480" />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.account}>
        <TouchableOpacity 
          // style={styles.button}
          onPress={() =>
            navigation.navigate('Account')}>
          <AntDesign name="home" size={100} color="#e75480" />
        </TouchableOpacity>
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
    flex: 6,
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
    // backgroundColor: "#e6d7ff",
    // borderRadius: 25,
    // margin: 50,
    // height: 50,
    // marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily:'Palatino',
    color: '#e75480',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  account:{
    flex: 1,
    paddingBottom: 10,
  }
});

export default HomeScreen;