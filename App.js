import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import QuestionScreen from './screens/QuestionScreen'
import { createStore } from "redux";
import { Provider } from 'react-redux';
import questionsReducer from './reducers/QuestionsReducer';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './firebase';

const store = createStore(questionsReducer);
const Stack = createStackNavigator();

const rrfProps = {
  firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

store.subscribe(() => console.log(store.getState()));


export default function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle:{
                backgroundColor:"#fadadd",
              },
              headerTitleStyle: {
                fontFamily: 'Palatino',
                color: "#e75480"
              }
            }}>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: 'Home',
            }}
            />
            <Stack.Screen
              name="Questions"
              component={QuestionScreen}
              options={{
                title: 'Questions',
                }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

