import React from "react";
import { StyledInput, Label } from "./styles";

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
    <>
      {label && <Label>{label}</Label>}
      <StyledInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </>
  );
}
