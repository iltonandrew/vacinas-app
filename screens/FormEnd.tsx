import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Alert } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { RootStackParamList } from '../types';
import {
  Background,
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
  SaveButton,
  SaveButtonText,
} from '../components/';
import { darkBlue, darkGreen, lightGreen } from '../assets/colors';
import { registerUser, DataType } from '../services/api';
import { storeUser } from '../services/storage';

export function FormEnd({
  navigation,
  route,
}: StackScreenProps<RootStackParamList, 'FormEnd'>) {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const { data }: any = route.params;
  return (
    <FormBase>
      <Background colors={[lightGreen, darkGreen, darkGreen, darkGreen]}>
        <FormHeader>
          <FormHeaderImage source={require('../assets/images/form.png')} />
          <FormHeaderText>Confirme seu cadastro</FormHeaderText>
        </FormHeader>
        {console.log(data)}
        <FormInput
          placeholder="Nome"
          keyboardType="name-phone-pad"
          value={data.user.firstName}
          editable={false}
        />
        <FormInput
          placeholder="Sobrenome"
          keyboardType="name-phone-pad"
          value={data.user.lastName}
          editable={false}
        />
        <FormInput
          placeholder="CPF"
          keyboardType="numeric"
          value={data.user.cpf}
          editable={false}
        />
        <FormInput
          placeholder="CNS"
          keyboardType="numeric"
          value={data.user.cns}
          editable={false}
        />
        <FormInput
          placeholder="Nome da mãe"
          keyboardType="name-phone-pad"
          value={data.user.motherName}
          editable={false}
        />
        <FormInput
          placeholder="Raça"
          keyboardType="name-phone-pad"
          value={data.user.race}
          editable={false}
        />
        <FormInput
          placeholder="Gênero"
          keyboardType="name-phone-pad"
          value={data.user.gender}
          editable={false}
        />
        <FormInput
          placeholder="CEP"
          keyboardType="numeric"
          value={data.address.postalCode}
          editable={false}
        />
        <FormInput
          placeholder="Estado"
          keyboardType="name-phone-pad"
          value={data.address.state}
          editable={false}
        />
        <FormInput
          placeholder="Município"
          keyboardType="name-phone-pad"
          value={data.address.city}
          editable={false}
        />
        <FormInput
          placeholder="Bairro"
          keyboardType="name-phone-pad"
          value={data.address.neighborhood}
          editable={false}
        />
        <FormInput
          placeholder="Endereço"
          keyboardType="name-phone-pad"
          value={data.address.streetName}
          editable={false}
        />
        <FormInput
          placeholder="Número"
          keyboardType="numeric"
          value={data.address.streetNumber}
          editable={false}
        />
        <FormInput
          placeholder="Complemento"
          keyboardType="name-phone-pad"
          value={data.address.complement}
          editable={false}
        />
        <FormInput
          placeholder="E-mail"
          keyboardType="email-address"
          value={data.user.email}
          editable={false}
        />
        <FormInput
          placeholder="Telefone Celular"
          keyboardType="numeric"
          value={data.user.phone}
          editable={false}
        />
        <SubmitButtonsWrapper>
          <GoBackButton onPress={() => navigation.goBack()}>
            <GoBackButtonText>Voltar</GoBackButtonText>
          </GoBackButton>
          <SaveButton
            onPress={async () => {
              await storeUser(data);
              setShowSuccess(true);
            }}
          >
            <SaveButtonText>Armazenar Usuário!</SaveButtonText>
          </SaveButton>
          <SubmitButton
            onPress={async () => {
              registerUser(data);
              setShowSuccess(true);
            }}
          >
            <SubmitButtonText>Enviar!</SubmitButtonText>
          </SubmitButton>
        </SubmitButtonsWrapper>
        <AwesomeAlert
          show={showSuccess}
          title="Operação Realizada!"
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
