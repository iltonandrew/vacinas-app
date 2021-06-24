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

export function Landing({
  navigation,
}: StackScreenProps<RootStackParamList, 'Root'>) {
  return (
    <Base>
      <Background colors={[lightGreen, darkGreen, darkGreen, darkGreen]}>
        <LogoArea>
          <Logo source={require('../assets/images/syringe.png')} />
          <LogoText1>Vaci</LogoText1>
          <LogoText2>Vida</LogoText2>
        </LogoArea>
        <RegisterButton onPress={() => navigation.replace('Form')}>
          <RegisterButtonText>Faça seu Pré-cadastro!</RegisterButtonText>
        </RegisterButton>
        <SyncWrapper onPress={() => navigation.replace('SyncScreen')}>
          <SyncImage source={require('../assets/images/sync.png')} />
          <SyncTextWrapper>
            <SyncText>Realizou o cadastro offline?</SyncText>
            <SyncText>Clique aqui para enviá-lo!</SyncText>
          </SyncTextWrapper>
        </SyncWrapper>
      </Background>
    </Base>
  );
}
