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
  const users = [
    {
      cpf: "49849482800",
      firstName: "Rodrigo",
    },
    {
      cpf: "12345678910",
      firstName: "Ilton",
    },
    {
      cpf: "10987654321",
      firstName: "Gabriel",
    },
    {
      cpf: "125742692370",
      firstName: "Fabio",
    },
  ];

  return (
    <ScrollView>
      <Container>
        <Question
          title={`${users.length} cadastros ainda não enviados para o sistema`}
        />

        {users.map(({ cpf, firstName }) => (
          <Card cpf={cpf} firstName={firstName} />
        ))}

        <GenericButton
          text="Enviar cadastros"
          onPress={() => console.log("eita lele")}
        />
      </Container>
    </ScrollView>
  );
}
