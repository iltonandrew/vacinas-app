import React from "react";
import { StyleSheet } from "react-native";
import { StyledInput, Label, Container } from "./styles";

interface InputProps {
  placeholder: string;
  onChangeText: (text: string, rawText?: string) => void;
  value: string;
  label?: string;
  keyboardType?: "name-phone-pad" | "numeric" | "email-address" | "phone-pad";
  maxLength?: number;
  mask?: string;
}

export function Input({
  placeholder,
  onChangeText,
  value,
  label,
  keyboardType,
  maxLength,
  mask,
}: InputProps) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        style={styles.input}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#aaaaaa",
    borderBottomWidth: 1,
    borderStyle: "solid",
    padding: 15,
    marginTop: 20,
    fontSize: 16,
  },
});
