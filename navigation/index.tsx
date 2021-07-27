import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import {
  Form,
  FormEnd,
  Landing,
  FormFirstName,
  NotFoundScreen,
  SyncScreen,
  FormLastName,
} from "../screens";
import { FormAddress } from "../screens/FormAddress";
import { FormCNS } from "../screens/FormCNS";
import { FormCPF } from "../screens/FormCPF";
import { FormEmail } from "../screens/FormEmail";
import { FormGender } from "../screens/FormGender";
import { FormMotherName } from "../screens/FormMotherName";
import { FormPhone } from "../screens/FormPhone";
import { FormRace } from "../screens/FormRace";
import { FormReview } from "../screens/FormReview";

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
      <Stack.Screen name="FormFirstName" component={FormFirstName} />
      <Stack.Screen name="FormLastName" component={FormLastName} />
      <Stack.Screen name="FormCPF" component={FormCPF} />
      <Stack.Screen name="FormCNS" component={FormCNS} />
      <Stack.Screen name="FormMotherName" component={FormMotherName} />
      <Stack.Screen name="FormRace" component={FormRace} />
      <Stack.Screen name="FormGender" component={FormGender} />
      <Stack.Screen name="FormAddress" component={FormAddress} />
      <Stack.Screen name="FormEmail" component={FormEmail} />
      <Stack.Screen name="FormPhone" component={FormPhone} />
      <Stack.Screen name="FormReview" component={FormReview} />
      <Stack.Screen name="Form" component={Form} />
      <Stack.Screen name="FormEnd" component={FormEnd} />
      <Stack.Screen name="SyncScreen" component={SyncScreen} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
