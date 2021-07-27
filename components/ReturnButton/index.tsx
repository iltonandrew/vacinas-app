import React from "react";
import { Alert } from "react-native";
import { StyledButton } from "./style";

interface ReturnButtonProps {
  text: string;
  onPress: () => void;
}

export function ReturnButton({ text, onPress }: ReturnButtonProps) {
  return <StyledButton onPress={onPress}>{text}</StyledButton>;
}
