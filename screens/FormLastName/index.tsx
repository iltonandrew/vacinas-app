import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Input } from "../../components/Input";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container } from "./styles";
import { useForm } from "../../hooks/useForm";

export function FormLastName({
  navigation,
}: StackScreenProps<RootStackParamList, "FormLastName">) {
  const { form, updateFormData } = useForm();
  const [lastName, setLastName] = useState(form.lastName || "");

  return (
    <Container>
      <Question title="Qual o seu sobrenome?" />
      <Input
        placeholder="Seu sobrenome"
        onChangeText={setLastName}
        value={lastName}
      />
      <ReturnButton text="Voltar" onPress={() => navigation.pop()} />
      <NextButton
        text="Próximo"
        onPress={() => {
          updateFormData({ ...form, lastName });
          console.log(form);

          navigation.push("FormCPF");
        }}
      />
    </Container>
  );
}
