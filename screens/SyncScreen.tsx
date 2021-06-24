import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Alert } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
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
  FormInput,
  FormBase,
  FormHeader,
  FormHeaderText,
  FormHeaderImage,
  SubmitButtonsWrapper,
  GoBackButton,
  GoBackButtonText,
  SubmitButton,
  SubmitButtonText,
  SyncBase,
  SyncInfoButton,
  SyncReturnButton,
  SyncReturnButtonText,
} from '../components/';
import { darkBlue, darkGreen, lightGreen } from '../assets/colors';

export function SyncScreen({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'FormEnd'>) {
  const [showAlert, setShowALert] = React.useState(false);
  const [hideFirst, setHideFirst] = React.useState(false);
  const [willHideFirst, setWillHideFirst] = React.useState(false);
  const [hideSecond, setHideSecond] = React.useState(false);
  const [willHideSecond, setWillHideSecond] = React.useState(false);
  const [hideThird, setHideThird] = React.useState(false);
  const [willHideThird, setWillHideThird] = React.useState(false);
  const [progress, setProgress] = React.useState(true);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [progress]);
  return (
    <SyncBase>
      <Background colors={[lightGreen, darkGreen, darkGreen, darkGreen]}>
        {!hideFirst && (
          <SyncInfoButton
            onPress={() => {
              setProgress(true);
              setShowALert(true);
              setWillHideFirst(true);
            }}
          >
            <SubmitButtonText>Registrar Ilton Andrew</SubmitButtonText>
            <SubmitButtonText>CPF: 426.XXX.XXX-XX</SubmitButtonText>
          </SyncInfoButton>
        )}
        {!hideSecond && (
          <SyncInfoButton
            onPress={() => {
              setProgress(true);
              setShowALert(true);
              setWillHideSecond(true);
            }}
          >
            <SubmitButtonText>Registrar João Cortez</SubmitButtonText>
            <SubmitButtonText>CPF: 384.XXX.XXX-XX</SubmitButtonText>
          </SyncInfoButton>
        )}
        {!hideThird && (
          <SyncInfoButton
            onPress={() => {
              setProgress(true);
              setShowALert(true);
              setWillHideThird(true);
            }}
          >
            <SubmitButtonText>Registrar Rodrigo Magaldi</SubmitButtonText>
            <SubmitButtonText>CPF: 518.XXX.XXX-XX</SubmitButtonText>
          </SyncInfoButton>
        )}
        <SyncReturnButton onPress={() => navigation.replace('Root')}>
          <SyncReturnButtonText>Retornar a tela inicial</SyncReturnButtonText>
        </SyncReturnButton>
        <AwesomeAlert
          show={showAlert}
          showProgress={progress}
          progressColor={darkGreen}
          progressSize={'large'}
          title={
            progress ? 'Enviando dados...' : 'Cadastro enviado com sucesso!'
          }
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={!progress}
          confirmText="Proceder"
          confirmButtonColor={darkGreen}
          onConfirmPressed={() => {
            willHideFirst && setHideFirst(true);
            willHideSecond && setHideSecond(true);
            willHideThird && setHideThird(true);
            setShowALert(false);
          }}
        />
      </Background>
    </SyncBase>
  );
}
