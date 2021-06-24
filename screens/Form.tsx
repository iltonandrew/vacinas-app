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
  FormInput,
  FormBase,
  FormHeader,
  FormHeaderText,
  FormHeaderImage,
} from '../components/';
import { darkGreen, lightGreen } from '../assets/colors';

export function Form({
  navigation,
}: StackScreenProps<RootStackParamList, 'Form'>) {
  const [name, SetName] = React.useState('');
  const [cpf, Setcpf] = React.useState('');
  const [country, Setcountry] = React.useState('');
  const [state, Setstate] = React.useState('');
  const [city, Setcity] = React.useState('');
  const [address, Setaddress] = React.useState('');
  const [number, Setnumber] = React.useState('');
  const [complement, Setcomplement] = React.useState('');
  const [district, Setdistrict] = React.useState('');
  const [cep, Setcep] = React.useState('');
  const [email, Setemail] = React.useState('');
  const [phone, Setphone] = React.useState('');
  const [birth, Setbirth] = React.useState('');
  const fields = {
    name,
    cpf,
    country,
    state,
    city,
    address,
    number,
    complement,
    district,
    cep,
    email,
    phone,
    birth,
  };

  return (
    <FormBase>
      <Background colors={[lightGreen, darkGreen, darkGreen, darkGreen]}>
        <FormHeader>
          <FormHeaderImage source={require('../assets/images/form.png')} />
          <FormHeaderText>Realizar pré cadastro</FormHeaderText>
        </FormHeader>
        <FormInput
          placeholder="Nome Completo"
          keyboardType="name-phone-pad"
          value={name}
          onChangeText={(text) => SetName(text)}
        />
        <FormInput
          placeholder="CPF"
          keyboardType="numeric"
          value={cpf}
          onChangeText={(text) => Setcpf(text)}
        />
        <FormInput
          placeholder="País"
          keyboardType="name-phone-pad"
          value={country}
          onChangeText={(text) => Setcountry(text)}
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
          placeholder="Logradouro"
          keyboardType="name-phone-pad"
          value={address}
          onChangeText={(text) => Setaddress(text)}
        />
        <FormInput
          placeholder="Número"
          keyboardType="numeric"
          value={number}
          onChangeText={(text) => Setnumber(text)}
        />
        <FormInput
          placeholder="Complemento"
          keyboardType="name-phone-pad"
          value={complement}
          onChangeText={(text) => Setcomplement(text)}
        />
        <FormInput
          placeholder="Bairro"
          keyboardType="name-phone-pad"
          value={district}
          onChangeText={(text) => Setdistrict(text)}
        />
        <FormInput
          placeholder="CEP"
          keyboardType="numeric"
          value={cep}
          onChangeText={(text) => Setcep(text)}
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
        <FormInput
          placeholder="Data de Nascimento"
          keyboardType="number-pad"
          value={birth}
          onChangeText={(text) => Setbirth(text)}
        />
        <RegisterButton
          onPress={() => navigation.navigate('FormEnd', { fields })}
        >
          <RegisterButtonText>Cadastrar!</RegisterButtonText>
        </RegisterButton>
      </Background>
    </FormBase>
  );
}
