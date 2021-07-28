import React from "react";
import { StyledButton } from "./styles";

interface GenericButtonProps {
  text: string;
  onPress: () => void;
}

export function GenericButton({ text, onPress }: GenericButtonProps) {
  return <StyledButton onPress={onPress}>{text}</StyledButton>;
}
