import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import {
  Background,
  RegisterButton,
  RegisterButtonText,
  FormInput,
  FormBase,
  FormHeader,
  FormHeaderText,
  FormHeaderImage,
} from '../components/';
import { darkGreen, lightGreen } from '../assets/colors';
import {
  DataType,
  userType,
  addressType,
  getAddressFromPostalCode,
} from '../services/api';

export function Form({
  navigation,
}: StackScreenProps<RootStackParamList, 'Form'>) {
  const [firstName, SetFirstName] = React.useState('');
  const [lastName, SetlastName] = React.useState('');
  const [cpf, Setcpf] = React.useState('');
  const [cns, Setcns] = React.useState('');
  const [motherName, SetmotherName] = React.useState('');
  const [gender, Setgender] = React.useState('');
  const [race, Setrace] = React.useState('');
  const [phone, Setphone] = React.useState('');
  const [email, Setemail] = React.useState('');
  const [postalCode, SetpostalCode] = React.useState('');
  const [city, Setcity] = React.useState('');
  const [state, Setstate] = React.useState('');
  const [neighborhood, Setneighborhood] = React.useState('');
  const [streetName, SetstreetName] = React.useState('');
  const [streetNumber, SetstreetNumber] = React.useState('');
  const [complement, Setcomplement] = React.useState('');

  const generateAddress = async (address: string) => {
    if (address.length === 8) {
      const response = await getAddressFromPostalCode(address);
      Setcity(response.city);
      Setneighborhood(response.neighborhood);
      Setstate(response.state);
      SetstreetName(response.streetName);
    }
  };

  const user: userType = {
    firstName,
    lastName,
    cpf,
    cns,
    motherName,
    gender,
    race,
    phone,
    email,
  };

  const address: addressType = {
    postalCode,
    city,
    state,
    neighborhood,
    streetName,
    streetNumber,
    complement,
  };

  const data: DataType = {
    user,
    address,
  };

  return (
    <FormBase>
      <Background colors={[lightGreen, darkGreen, darkGreen, darkGreen]}>
        <FormHeader>
          <FormHeaderImage source={require('../assets/images/form.png')} />
          <FormHeaderText>Realizar pré cadastro</FormHeaderText>
        </FormHeader>
        <FormInput
          placeholder="Nome"
          keyboardType="name-phone-pad"
          value={firstName}
          onChangeText={(text) => SetFirstName(text)}
        />
        <FormInput
          placeholder="Sobrenome"
          keyboardType="name-phone-pad"
          value={lastName}
          onChangeText={(text) => SetlastName(text)}
        />
        <FormInput
          placeholder="CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={(text) => Setcpf(text)}
        />
        <FormInput
          placeholder="CNS"
          keyboardType="numeric"
          value={cns}
          onChangeText={(text) => Setcns(text)}
        />
        <FormInput
          placeholder="Nome da mãe"
          keyboardType="name-phone-pad"
          value={motherName}
          onChangeText={(text) => SetmotherName(text)}
        />
        <FormInput
          placeholder="Raça"
          keyboardType="name-phone-pad"
          value={race}
          onChangeText={(text) => Setrace(text)}
        />
        <FormInput
          placeholder="Gênero"
          keyboardType="name-phone-pad"
          value={gender}
          onChangeText={(text) => Setgender(text)}
        />
        <FormInput
          placeholder="CEP"
          keyboardType="numeric"
          value={postalCode}
          onChangeText={(text) => {
            SetpostalCode(text);
            generateAddress(text);
          }}
        />
        <FormInput
          placeholder="Estado"
          keyboardType="name-phone-pad"
          value={state}
          onChangeText={(text) => Setstate(text)}
        />
        <FormInput
          placeholder="Município"
          keyboardType="name-phone-pad"
          value={city}
          onChangeText={(text) => Setcity(text)}
        />
        <FormInput
          placeholder="Bairro"
          keyboardType="name-phone-pad"
          value={neighborhood}
          onChangeText={(text) => Setneighborhood(text)}
        />
        <FormInput
          placeholder="Endereço"
          keyboardType="name-phone-pad"
          value={streetName}
          onChangeText={(text) => SetstreetName(text)}
        />
        <FormInput
          placeholder="Número"
          keyboardType="numeric"
          value={streetNumber}
          onChangeText={(text) => SetstreetNumber(text)}
        />
        <FormInput
          placeholder="Complemento"
          keyboardType="name-phone-pad"
          value={complement}
          onChangeText={(text) => Setcomplement(text)}
        />
        <FormInput
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => Setemail(text)}
        />
        <FormInput
          placeholder="Telefone Celular"
          keyboardType="numeric"
          value={phone}
          onChangeText={(text) => Setphone(text)}
        />
        <RegisterButton
          onPress={() => navigation.navigate('FormEnd', { data })}
        >
          <RegisterButtonText>Cadastrar!</RegisterButtonText>
        </RegisterButton>
      </Background>
    </FormBase>
  );
}
