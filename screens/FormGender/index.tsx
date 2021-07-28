import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container } from "./styles";
import { useForm } from "../../hooks/useForm";
import { Dropdown } from "../../components/Dropdown";

export function FormGender({
  navigation,
}: StackScreenProps<RootStackParamList, "FormGender">) {
  const { form, updateFormData } = useForm();
  const [gender, setGender] = useState(form.gender || "");

  const genders = [
    {
      label: "Masculino",
      value: "masculino",
    },
    {
      label: "Feminino",
      value: "feminino",
    },
    {
      label: "Outro",
      value: "outro",
    },
    {
      label: "Prefiro não identificar",
      value: "indefinido",
    },
  ];

  return (
    <Container>
      <Question title="Qual o seu gênero?" />
      <Dropdown
        items={genders}
        onValueChange={(value) => setGender(value)}
        placeholder={{
          label: "Selecione o seu gênero...",
          value: "",
        }}
        value={gender}
        key={genders?.[0]?.label}
      />
      <ReturnButton text="Voltar" onPress={() => navigation.pop()} />
      <NextButton
        text="Próximo"
        disabled={!gender}
        onPress={() => {
          updateFormData({ ...form, gender });
          console.log(form);

          navigation.push("FormAddress");
        }}
      />
    </Container>
  );
}
