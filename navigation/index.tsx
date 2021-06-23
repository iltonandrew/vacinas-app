import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import LinkingConfiguration from './LinkingConfiguration';
import { Form, Landing, NotFoundScreen } from '../screens';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} headerMode="none">
      <Stack.Screen name="Root" component={Landing} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
