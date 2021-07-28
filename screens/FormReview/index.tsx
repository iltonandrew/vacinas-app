import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Dropdown } from "../../components/Dropdown";
import { Input } from "../../components/Input";
import { NextButton } from "../../components/NextButton";
import { NumberAndComplementInput } from "../../components/NumberAndComplementInput";
import { Question } from "../../components/Question";
import { ReturnButton } from "../../components/ReturnButton";
import { ScrollFormButtons } from "../../components/ScrollFormButtons";
import { useForm } from "../../hooks/useForm";
import { RootStackParamList } from "../../types";
import { Container } from "./styles";

export function FormReview({
  navigation,
}: StackScreenProps<RootStackParamList, "FormRace">) {
  const { form, updateFormData } = useForm();

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
    <ScrollView>
      <Container>
        <Question title="Revise suas informações" />
        <Input
          label="Nome"
          placeholder={form.firstName || ""}
          onChangeText={(firstName) => updateFormData({ ...form, firstName })}
          value={form.firstName || ""}
        />
        <Input
          label="Sobrenome"
          placeholder={form.lastName || ""}
          onChangeText={(lastName) => updateFormData({ ...form, lastName })}
          value={form.lastName || ""}
        />
        <Input
          label="CPF"
          placeholder={form.cpf || ""}
          onChangeText={(cpf) => updateFormData({ ...form, cpf })}
          value={form.cpf || ""}
          keyboardType="numeric"
        />
        <Input
          label="CNS"
          placeholder={form.cns || ""}
          onChangeText={(cns) => updateFormData({ ...form, cns })}
          value={form.cns || ""}
        />
        <Input
          label="Nome da mãe"
          placeholder={form.motherName || ""}
          onChangeText={(motherName) => updateFormData({ ...form, motherName })}
          value={form.motherName || ""}
        />
        <Dropdown
          label="Raça"
          items={races}
          onValueChange={(race) => updateFormData({ ...form, race })}
          placeholder={{
            label: "Selecione a sua raça...",
            value: "",
          }}
          value={form.race || ""}
          key={races?.[0]?.label}
        />
        <Dropdown
          label="Gênero"
          items={genders}
          onValueChange={(gender) => updateFormData({ ...form, gender })}
          placeholder={{
            label: "Selecione o seu gênero...",
            value: "",
          }}
          value={form.gender || ""}
          key={genders?.[0]?.label}
        />
        <Input
          label="CEP"
          placeholder={form.postalCode || ""}
          onChangeText={(postalCode) => updateFormData({ ...form, postalCode })}
          value={form.postalCode || ""}
          keyboardType="numeric"
        />
        <Input
          label="Estado"
          placeholder={form.state || ""}
          onChangeText={(state) => updateFormData({ ...form, state })}
          value={form.state || ""}
        />
        <Input
          label="Cidade"
          placeholder={form.city || ""}
          onChangeText={(city) => updateFormData({ ...form, city })}
          value={form.city || ""}
        />
        <Input
          label="Bairro"
          placeholder={form.neighborhood || ""}
          onChangeText={(neighborhood) =>
            updateFormData({ ...form, neighborhood })
          }
          value={form.neighborhood || ""}
        />
        <Input
          label="Endereço"
          placeholder={form.streetName || ""}
          onChangeText={(streetName) => updateFormData({ ...form, streetName })}
          value={form.streetName || ""}
        />
        <NumberAndComplementInput
          numberValue={form.streetNumber || ""}
          numberOnChangeText={(streetNumber) =>
            updateFormData({ ...form, streetNumber })
          }
          complementValue={form.complement || ""}
          complementOnChangeText={(complement) =>
            updateFormData({ ...form, complement })
          }
        />
        <Input
          label="Email"
          placeholder={form.email || ""}
          onChangeText={(email) => updateFormData({ ...form, email })}
          value={form.email || ""}
          keyboardType="email-address"
        />
        <Input
          label="Telefone"
          placeholder={form.phone || ""}
          onChangeText={(phone) => updateFormData({ ...form, phone })}
          value={form.phone || ""}
          keyboardType="numeric"
        />
        <ScrollFormButtons
          textReturn="Voltar"
          textNext="Concluir"
          onPressReturn={() => navigation.pop()}
          onPressNext={() => {
            console.log(form);
          }}
        />
      </Container>
    </ScrollView>
  );
}
