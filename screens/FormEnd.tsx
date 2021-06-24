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
} from '../components/';
import { darkBlue, darkGreen, lightGreen } from '../assets/colors';

export function FormEnd({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'FormEnd'>) {
  const [showAlert, setShowALert] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [shouldContinue, setShouldContinue] = React.useState(false);
  const { fields } = route.params;
  return (
    <FormBase>
      <Background colors={[lightGreen, darkGreen, darkGreen, darkGreen]}>
        <FormHeader>
          <FormHeaderImage source={require('../assets/images/form.png')} />
          <FormHeaderText>Confirme seu cadastro</FormHeaderText>
        </FormHeader>
        <FormInput
          placeholder="Nome Completo"
          keyboardType="name-phone-pad"
          value={fields.name}
          editable={false}
        />
        <FormInput
          placeholder="CPF"
          keyboardType="numeric"
          value={fields.cpf}
          editable={false}
        />
        <FormInput
          placeholder="País"
          keyboardType="name-phone-pad"
          value={fields.country}
          editable={false}
        />
        <FormInput
          placeholder="Estado"
          keyboardType="name-phone-pad"
          value={fields.state}
          editable={false}
        />
        <FormInput
          placeholder="Município"
          keyboardType="name-phone-pad"
          value={fields.city}
          editable={false}
        />
        <FormInput
          placeholder="Logradouro"
          keyboardType="name-phone-pad"
          value={fields.address}
          editable={false}
        />
        <FormInput
          placeholder="Número"
          keyboardType="numeric"
          value={fields.number}
          editable={false}
        />
        <FormInput
          placeholder="Complemento"
          keyboardType="name-phone-pad"
          value={fields.complement}
          editable={false}
        />
        <FormInput
          placeholder="Bairro"
          keyboardType="name-phone-pad"
          value={fields.district}
          editable={false}
        />
        <FormInput
          placeholder="CEP"
          keyboardType="numeric"
          value={fields.cep}
          editable={false}
        />
        <FormInput
          placeholder="E-mail"
          keyboardType="email-address"
          value={fields.email}
          editable={false}
        />
        <FormInput
          placeholder="Telefone Celular"
          keyboardType="numeric"
          value={fields.phone}
          editable={false}
        />
        <FormInput
          placeholder="Data de Nascimento"
          keyboardType="number-pad"
          value={fields.birth}
          editable={false}
        />
        <SubmitButtonsWrapper>
          <GoBackButton onPress={() => navigation.goBack()}>
            <GoBackButtonText>Voltar</GoBackButtonText>
          </GoBackButton>
          <SubmitButton
            onPress={() =>
              shouldContinue ? setShowSuccess(true) : setShowALert(true)
            }
          >
            <SubmitButtonText>Enviar!</SubmitButtonText>
          </SubmitButton>
        </SubmitButtonsWrapper>
        <AwesomeAlert
          show={showAlert}
          title="Conexão não encontrada!"
          message="Não se preocupe, seus dados foram salvos! Será possivel enviá-los quando tiver uma conexão disponível clicando em sincronizar com banco de dados"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Tentar novamente"
          confirmText="Enviar depois"
          onDismiss={() => setShowALert(false)}
          confirmButtonColor={darkGreen}
          cancelButtonColor={darkBlue}
          onCancelPressed={() => {
            setShouldContinue(true);
            setShowALert(false);
          }}
          onConfirmPressed={() => {
            navigation.replace('Root');
          }}
        />
        <AwesomeAlert
          show={showSuccess}
          title="Cadastro enviado com sucesso!"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="Proceder"
          confirmButtonColor={darkGreen}
          onConfirmPressed={() => {
            navigation.replace('Root');
          }}
        />
      </Background>
    </FormBase>
  );
}
