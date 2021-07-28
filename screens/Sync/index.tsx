import React, { useState } from "react";
import { ScrollView } from "react-native";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import { Question } from "../../components/Question";
import { Container } from "./styles";
import { Card } from "../../components/Card";
import { GenericButton } from "../../components/GenericButton";

export function Sync({
  navigation,
}: StackScreenProps<RootStackParamList, "Sync">) {
  const [numberOfUsers, setNumberOfUsers] = useState(4);

  return (
    <ScrollView>
      <Container>
        <Question
          title={`${numberOfUsers} cadastros ainda não enviados para o sistema`}
        />
        <Card cpf="49849482800" firstName="Rodrigo" />
        <Card cpf="49849482800" firstName="Rodrigo" />
        <Card cpf="49849482800" firstName="Rodrigo" />
        <Card cpf="49849482800" firstName="Rodrigo" />
        <Card cpf="49849482800" firstName="Rodrigo" />
        <Card cpf="49849482800" firstName="Rodrigo" />

        <GenericButton
          text="Enviar cadastros"
          onPress={() => console.log("eita lele")}
        />
      </Container>
    </ScrollView>
  );
}
