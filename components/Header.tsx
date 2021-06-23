import * as React from 'react';
import { StatusBar } from 'react-native';
import { darkGreen } from '../assets/colors';

export function Header() {
  return <StatusBar barStyle="dark-content" backgroundColor={darkGreen} />;
}
