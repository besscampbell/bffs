import * as firebase from 'firebase';
import 'firebase/firestore';
import {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_APP_ID
} from '@env'

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  appId: REACT_APP_FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;