import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Input } from "../../components/Input";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container } from "./styles";
import { useForm } from "../../hooks/useForm";

export function FormMotherName({
  navigation,
}: StackScreenProps<RootStackParamList, "FormMotherName">) {
  const { form, updateFormData } = useForm();
  const [motherName, setMotherName] = useState(form.motherName || "");

  return (
    <Container>
      <Question title="Qual o nome da sua mãe?" />
      <Input
        placeholder="Nome da sua mãe"
        onChangeText={setMotherName}
        value={motherName}
      />
      <ReturnButton text="Voltar" onPress={() => navigation.pop()} />
      <NextButton
        text="Próximo"
        onPress={() => {
          updateFormData({ ...form, motherName });
          console.log(form);

          navigation.push("FormRace");
        }}
      />
    </Container>
  );
}
