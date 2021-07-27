import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Input } from "../../components/Input";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container, DetailText } from "./styles";
import { useForm } from "../../hooks/useForm";

export function FormPhone({
  navigation,
}: StackScreenProps<RootStackParamList, "FormPhone">) {
  const { form, updateFormData } = useForm();
  const [phone, setPhone] = useState(form.phone || "");

  return (
    <Container>
      <Question title="Qual o seu telefone?" />
      <Input
        placeholder="Seu telefone"
        onChangeText={setPhone}
        value={phone}
        keyboardType="numeric"
      />
      <ReturnButton text="Voltar" onPress={() => navigation.pop()} />
      <NextButton
        text="Próximo"
        onPress={() => {
          updateFormData({ ...form, phone });
          console.log(form);

          navigation.push("FormReview");
        }}
      />
    </Container>
  );
}
