/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import { TransitionPresets } from '@react-navigation/stack';
import { Intro, Login, Home, Search, Profile, Splash, Register, ForgotPassword, LayananUmum, LayananKhusus } from '../pages';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const Router = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      ...TransitionPresets.DefaultTransition,
      headerMode: 'screen',
      transitionSpec: {
        open: config,
        close: config,
      },
    }}
    initialRouteName="Intro">
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
      <Stack.Screen
        name="LayananUmum"
        component={LayananUmum}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LayananKhusus"
        component={LayananKhusus}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
