import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import { Question } from '../../components/Question';
import { Container } from './styles';
import { Card } from '../../components/Card';
import { GenericButton } from '../../components/GenericButton';

import { retrieveUsers, cleanStore } from '../../services/storage';
import { sendUserArray } from '../../services/api';
import { useEffect } from 'react';

export function Sync({
  navigation,
}: StackScreenProps<RootStackParamList, 'Sync'>) {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    setUsers(await retrieveUsers());
  };
  useEffect(() => {
    getUsers();
  }, []);
  const handleSubmit = async (data: any) => {
    sendUserArray(data);
    showAlert();
  };

  const showAlert = () =>
    Alert.alert(
      'Usuários Enviados com Sucesso',
      'O banco de dados foi sincronizado e todos usuários do dispositivo foram enviados!',
      [
        {
          text: 'Confirmar',
          onPress: () => navigation.goBack(),
          style: 'default',
        },
      ]
    );

  return (
    <ScrollView>
      <Container>
        <Question
          title={`${users.length} cadastros ainda não enviados para o sistema`}
        />

        {users.map(({ user: { cpf, firstName } }, index) => (
          <Card key={index} cpf={cpf} firstName={firstName} />
        ))}

        <GenericButton
          text="Enviar cadastros"
          onPress={() => handleSubmit(users)}
        />
      </Container>
    </ScrollView>
  );
}
