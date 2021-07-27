import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Input } from "../../components/Input";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container } from "./styles";
import { useForm } from "../../hooks/useForm";

export function FormCPF({
  navigation,
}: StackScreenProps<RootStackParamList, "FormCPF">) {
  const { form, updateFormData } = useForm();
  const [cpf, setCpf] = useState(form.cpf || "");

  return (
    <Container>
      <Question title="Qual o seu CPF?" />
      <Input
        placeholder="___.___.___-__"
        onChangeText={setCpf}
        value={cpf}
        keyboardType="numeric"
      />
      <ReturnButton text="Voltar" onPress={() => navigation.pop()} />
      <NextButton
        text="Próximo"
        onPress={() => {
          updateFormData({ ...form, cpf });
          console.log(form);

          navigation.push("FormCNS");
        }}
      />
    </Container>
  );
}
