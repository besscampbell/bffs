import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import ResponseScreen from '../screens/ResponseScreen';
import LoginScreen from '../screens/LoginScreen';
import LogOffScreen from '../screens/LogOffScreen';
import ResponseDetailsScreen from '../screens/ResponseDetailsScreen';
import 'firebase/auth';
import firebase, { auth } from 'firebase/app';


const Stack = createStackNavigator();

const Navigation = () => {
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
            name="Welcome"
            component={LoginScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
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
          name="Home"
          component={HomeScreen}
          options={{
            title: '',
        }}
        />
        <Stack.Screen
          name="Questions"
          component={QuestionScreen}
          options={{
            title: 'Questions',
            }}
        />
        <Stack.Screen
          name="Responses"
          component={ResponseScreen}
          options={{
            title: 'Responses',
            }}
        />
        <Stack.Screen
          name="Details"
          component={ResponseDetailsScreen}
          options={{
            title: '',
            }}
        />
        <Stack.Screen
          name="LogOff"
          component={LogOffScreen}
          options={{
            title: '',
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;