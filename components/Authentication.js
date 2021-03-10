import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import 'firebase/auth';

const Authentication = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if(initializing) return null;

  if(!user) {
    return (
      <LoginScreen />
    );
  }
  return (
    <HomeScreen/>
  );
}

export default Authentication;