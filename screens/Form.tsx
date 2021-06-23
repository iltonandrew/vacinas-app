import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import {
  Base,
  Background,
  RegisterButton,
  RegisterButtonText,
  Logo,
  LogoArea,
  LogoText1,
  LogoText2,
  SyncWrapper,
  SyncText,
  SyncTextWrapper,
  SyncImage,
} from '../components/';
import { darkGreen, lightGreen } from '../assets/colors';

export function Form({
  navigation,
}: StackScreenProps<RootStackParamList, 'Form'>) {
  return (
    <Base>
      <Background colors={[darkGreen, lightGreen]}>
        <LogoText2>TELA CADASTRO</LogoText2>
        <RegisterButton onPress={() => navigation.replace('Root')}>
          <RegisterButtonText>é o voltas</RegisterButtonText>
        </RegisterButton>
      </Background>
    </Base>
  );
}
