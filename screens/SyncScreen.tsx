import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import AwesomeAlert from 'react-native-awesome-alerts';
import { RootStackParamList } from '../types';
import {
  Background,
  SubmitButtonText,
  SyncBase,
  SyncInfoButton,
  SaveButton,
  SaveButtonText,
  SyncReturnButton,
  SyncReturnButtonText,
} from '../components/';
import { darkBlue, darkGreen, lightGreen } from '../assets/colors';
import { retrieveUsers, cleanStore } from '../services/storage';
import { DataType } from '../services/api';
import { useState } from 'react';
import { api } from '../services/api';

export function SyncScreen({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'FormEnd'>) {
  const [data, setData] = useState<DataType>();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showAlert, setShowALert] = React.useState(false);
  const [hideFirst, setHideFirst] = React.useState(false);
  const [willHideFirst, setWillHideFirst] = React.useState(false);
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
        <SyncReturnButton
          onPress={async () => {
            setData(await retrieveUsers());
            setDataLoaded(true);
          }}
        >
          <SyncReturnButtonText>Carregar usuários</SyncReturnButtonText>
        </SyncReturnButton>
        {dataLoaded && data && !hideFirst && (
          <SyncInfoButton
            onPress={() => {
              setProgress(true);
              setShowALert(true);
              setWillHideFirst(true);
            }}
          >
            <SubmitButtonText>{`Registrar ${data.user.firstName} ${data.user.lastName}`}</SubmitButtonText>
            <SubmitButtonText>{`CPF: ${data.user.cpf}`}</SubmitButtonText>
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
            setShowALert(false);
          }}
        />
      </Background>
    </SyncBase>
  );
}
