import 'react-native-gesture-handler';
import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './firebase';
import 'firebase/auth';
import Navigation from './navigation';

const initialState = {
  selectedResponse: null,
  questions: 0,
}

const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}


export default function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
       <Navigation />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

