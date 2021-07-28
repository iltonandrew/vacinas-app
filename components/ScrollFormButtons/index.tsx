import React from "react";
import { StyledButton, Container } from "./styles";

interface ScrollFormButtonsProps {
  textReturn: string;
  textNext: string;
  onPressReturn: () => void;
  onPressNext: () => void;
}

export function ScrollFormButtons({
  textReturn,
  onPressReturn,
  textNext,
  onPressNext,
}: ScrollFormButtonsProps) {
  return (
    <Container>
      <StyledButton onPress={onPressReturn}>{textReturn}</StyledButton>
      <StyledButton onPress={onPressNext}>{textNext}</StyledButton>
    </Container>
  );
}
