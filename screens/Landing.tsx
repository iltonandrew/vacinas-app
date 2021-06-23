import * as React from 'react';
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

export function Landing() {
  return (
    <Base>
      <Background colors={[darkGreen, lightGreen]}>
        <LogoArea>
          <Logo source={require('../assets/images/syringe.png')} />
          <LogoText1>Vaci</LogoText1>
          <LogoText2>Vida</LogoText2>
        </LogoArea>
        <RegisterButton onPress={() => undefined}>
          <RegisterButtonText>Faça seu Pré-cadastro!</RegisterButtonText>
        </RegisterButton>
        <SyncWrapper>
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
