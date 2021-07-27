import React from "react";
import { Alert } from "react-native";
import { StyledButton } from "./style";

interface NextButtonProps {
  text: string;
  onPress: () => void;
}

export function NextButton({ text, onPress }: NextButtonProps) {
  return <StyledButton onPress={onPress}>{text}</StyledButton>;
}
