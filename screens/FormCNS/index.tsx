import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Input } from "../../components/Input";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container, DetailText } from "./styles";
import { useForm } from "../../hooks/useForm";

export function FormCNS({
  navigation,
}: StackScreenProps<RootStackParamList, "FormCNS">) {
  const { form, updateFormData } = useForm();
  const [cns, setCns] = useState(form.cns || "");

  return (
    <Container>
      <Question title="Qual o seu CNS?" />
      <DetailText>
        CNS é o número do seu cartão do SUS. Se não souber ou não tiver, pode
        deixar em branco ;)
      </DetailText>
      <Input
        placeholder="Seu CNS"
        onChangeText={setCns}
        value={cns}
        keyboardType="numeric"
      />
      <ReturnButton text="Voltar" onPress={() => navigation.pop()} />
      <NextButton
        text="Próximo"
        onPress={() => {
          updateFormData({ ...form, cns });
          console.log(form);

          navigation.push("FormMotherName");
        }}
      />
    </Container>
  );
}
