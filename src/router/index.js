/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Intro, Login, Home, Search, Profile, Splash, Register, ForgotPassword } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
