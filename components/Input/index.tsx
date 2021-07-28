import React from "react";
import { StyledInput, Label, Container } from "./styles";

interface InputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  label?: string;
  keyboardType?: "name-phone-pad" | "numeric" | "email-address";
}

export function Input({
  placeholder,
  onChangeText,
  value,
  label,
  keyboardType,
}: InputProps) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </Container>
  );
}
