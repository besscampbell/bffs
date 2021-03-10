import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import ResponseScreen from '../screens/ResponseScreen';
import LoginScreen from '../screens/LoginScreen';
import ResponseDetailsScreen from '../screens/ResponseDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const LoginStack = createStackNavigator();

const Navigation = () => {
  const Home = () => {
    <Tab.Navigator>
      <Tab.Screen
        name="Questions"
        component={QuestionScreen}
        options={{
          title: 'Questions',
          }}
      />
      <Tab.Screen
        name="Responses"
        component={ResponseScreen}
        options={{
          title: 'Responses',
          }}
      />
    </Tab.Navigator>
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
        {/* <Stack.Screen
          name="Welcome"
          component={LoginScreen}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
        }}
        />
        {/* <Stack.Screen
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
            }} */}
        {/* /> */}
        <Stack.Screen
          name="Details"
          component={ResponseDetailsScreen}
          options={{
            title: '',
            }}
        />
      </Stack.Navigator>
      {/* <LoginStack.Navigator>
        <LoginStack.Screen
          name="Login"
          component={LoginScreen}
        />
      </LoginStack.Navigator> */}
    </NavigationContainer>
  )
}

export default Navigation;