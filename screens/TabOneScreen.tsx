import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Input } from '../components/Input/styles';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <Input placeholder="placeholder" />
      <Input placeholder="placeholder" />
      <Input placeholder="placeholder" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
