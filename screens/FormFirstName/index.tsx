import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Input } from "../../components/Input";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container } from "./styles";
import { useForm } from "../../hooks/useForm";

export function FormFirstName({
  navigation,
}: StackScreenProps<RootStackParamList, "FormFirstName">) {
  const { form, updateFormData } = useForm();
  const [firstName, setFirstName] = useState(form.firstName || "");

  return (
    <Container>
      <Question title="Qual o seu nome?" />
      <Input
        placeholder="Seu primeiro nome"
        onChangeText={setFirstName}
        value={firstName}
      />
      <ReturnButton text="Voltar" onPress={() => navigation.pop()} />
      <NextButton
        text="Próximo"
        disabled={!firstName}
        onPress={() => {
          updateFormData({ ...form, firstName });
          navigation.push("FormLastName");
          console.log(form);
        }}
      />
    </Container>
  );
}
