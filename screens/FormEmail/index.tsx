import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Input } from "../../components/Input";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container, DetailText } from "./styles";
import { useForm } from "../../hooks/useForm";

export function FormEmail({
  navigation,
}: StackScreenProps<RootStackParamList, "FormEmail">) {
  const { form, updateFormData } = useForm();
  const [email, setEmail] = useState(form.email || "");

  return (
    <Container>
      <Question title="Qual o seu email?" />
      <Input
        placeholder="Seu email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <ReturnButton text="Voltar" onPress={() => navigation.pop()} />
      <NextButton
        text="Próximo"
        onPress={() => {
          updateFormData({ ...form, email });
          console.log(form);

          navigation.push("FormPhone");
        }}
      />
    </Container>
  );
}
