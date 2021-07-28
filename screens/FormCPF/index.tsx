import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Input } from "../../components/Input";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container } from "./styles";
import { useForm } from "../../hooks/useForm";

import { isValidCPF } from "@brazilian-utils/brazilian-utils";

export function FormCPF({
  navigation,
}: StackScreenProps<RootStackParamList, "FormCPF">) {
  const { form, updateFormData } = useForm();
  const [cpf, setCpf] = useState(form.cpf || "");

  const [isValidCpf, setIsValidCpf] = useState(isValidCPF(cpf));

  const handleValidCpf = (cpf: string) => {
    if (isValidCPF(cpf)) {
      setIsValidCpf(true);
    } else {
      setIsValidCpf(false);
    }
  };

  return (
    <Container>
      <Question title="Qual o seu CPF?" />
      <Input
        placeholder="___.___.___-__"
        maxLength={11}
        onChangeText={(text) => {
          setCpf(text);
          handleValidCpf(text);
        }}
        value={cpf}
        keyboardType="numeric"
      />
      <ReturnButton text="Voltar" onPress={() => navigation.pop()} />
      <NextButton
        text="Próximo"
        disabled={!isValidCpf}
        onPress={() => {
          updateFormData({ ...form, cpf });
          console.log(form);

          navigation.push("FormCNS");
        }}
      />
    </Container>
  );
}
