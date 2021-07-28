import React from "react";
import { Input } from "../Input";
import { Container } from "./styles";

interface NumberAndComplementInputProps {
  numberOnChangeText: (text: string) => void;
  complementOnChangeText: (text: string) => void;
  numberValue: string;
  complementValue: string;
}

export function NumberAndComplementInput({
  numberOnChangeText,
  numberValue,
  complementOnChangeText,
  complementValue,
}: NumberAndComplementInputProps) {
  return (
    <Container>
      <Input
        placeholder="Número"
        onChangeText={numberOnChangeText}
        value={numberValue}
        label="Número"
        keyboardType="numeric"
      />
      <Input
        placeholder="Complemento"
        onChangeText={complementOnChangeText}
        value={complementValue}
        label="Complemento"
      />
    </Container>
  );
}
