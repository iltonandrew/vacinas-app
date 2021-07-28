import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container } from "./styles";
import { useForm } from "../../hooks/useForm";
import { Dropdown } from "../../components/Dropdown";

export function FormRace({
  navigation,
}: StackScreenProps<RootStackParamList, "FormRace">) {
  const { form, updateFormData } = useForm();
  const [race, setRace] = useState(form.race || "");

  const races = [
    {
      label: "Branco",
      value: "branco",
    },
    {
      label: "Preto",
      value: "preto",
    },
    {
      label: "Pardo",
      value: "pardo",
    },
    {
      label: "Amarelo",
      value: "amarelo",
    },
    {
      label: "Indígena",
      value: "indigena",
    },
    {
      label: "Outro",
      value: "outro",
    },
  ];

  return (
    <Container>
      <Question title="Qual a sua raça?" />
      <Dropdown
        items={races}
        onValueChange={(value) => setRace(value)}
        placeholder={{
          label: "Selecione a sua raça...",
          value: "",
        }}
        value={race}
        key={races?.[0]?.label}
      />
      <ReturnButton text="Voltar" onPress={() => navigation.pop()} />
      <NextButton
        text="Próximo"
        disabled={!race}
        onPress={() => {
          updateFormData({ ...form, race });
          console.log(form);

          navigation.push("FormGender");
        }}
      />
    </Container>
  );
}
