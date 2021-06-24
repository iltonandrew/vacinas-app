import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Form, FormEnd, Landing, NotFoundScreen, SyncScreen } from '../screens';

export default function Navigation() {
  return (
    <NavigationContainer>
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
      <Stack.Screen name="FormEnd" component={FormEnd} />
      <Stack.Screen name="SyncScreen" component={SyncScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
