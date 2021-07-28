import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { NextButton } from "../../components/NextButton";
import { ReturnButton } from "../../components/ReturnButton";
import { Input } from "../../components/Input";
import { Question } from "../../components/Question";
import { RootStackParamList } from "../../types";
import { Container } from "./styles";
import { useForm } from "../../hooks/useForm";

import { getAddressFromPostalCode } from "../../services/api";
import { ScrollView } from "react-native";
import { ScrollFormButtons } from "../../components/ScrollFormButtons";
import { NumberAndComplementInput } from "../../components/NumberAndComplementInput";

export function FormAddress({
  navigation,
}: StackScreenProps<RootStackParamList, "FormAddress">) {
  const { form, updateFormData } = useForm();

  const [postalCode, setPostalCode] = useState(form.postalCode || "");
  const [state, setState] = useState(form.state || "");
  const [city, setCity] = useState(form.city || "");
  const [neighborhood, setNeighborhood] = useState(form.neighborhood || "");
  const [streetName, setStreetName] = useState(form.streetName || "");
  const [streetNumber, setStreetNumber] = useState(form.streetNumber || "");
  const [complement, setComplement] = useState(form.complement || "");

  const handleChangePostalCode = async (value: string) => {
    setPostalCode(value);

    if (value.length === 8) {
      const response = await getAddressFromPostalCode(value);

      setState(response?.state || "");
      setCity(response?.city || "");
      setNeighborhood(response?.neighborhood || "");
      setStreetName(response?.streetName || "");
      setPostalCode(value);
    }
  };

  return (
    <ScrollView>
      <Container>
        <Question title="Qual o seu endereço?" />
        <Input
          label="CEP"
          placeholder="Digite seu CEP (apenas números)"
          onChangeText={handleChangePostalCode}
          value={postalCode}
          keyboardType="numeric"
        />
        <Input
          label="Estado"
          placeholder="Estado"
          onChangeText={setState}
          value={state}
        />
        <Input
          label="Cidade"
          placeholder="Cidade"
          onChangeText={setCity}
          value={city}
        />
        <Input
          label="Bairro"
          placeholder="Bairro"
          onChangeText={setNeighborhood}
          value={neighborhood}
        />
        <Input
          label="Endereço"
          placeholder="Nome da rua"
          onChangeText={setStreetName}
          value={streetName}
        />
        <NumberAndComplementInput
          numberValue={streetNumber}
          numberOnChangeText={setStreetNumber}
          complementValue={complement}
          complementOnChangeText={setComplement}
        />
        <ScrollFormButtons
          textReturn="Voltar"
          textNext="Próximo"
          onPressReturn={() => navigation.pop()}
          onPressNext={() => {
            updateFormData({
              ...form,
              postalCode,
              state,
              city,
              neighborhood,
              streetName,
              streetNumber,
              complement,
            });
            navigation.push("FormEmail");
            console.log(form);
          }}
        />
      </Container>
    </ScrollView>
  );
}
