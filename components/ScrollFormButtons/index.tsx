import React from "react";
import { StyleSheet } from "react-native";
import { StyledButton, Container } from "./styles";

interface ScrollFormButtonsProps {
  textReturn: string;
  textNext: string;
  onPressReturn: () => void;
  onPressNext: () => void;
  disabled?: boolean;
}

export function ScrollFormButtons({
  textReturn,
  onPressReturn,
  textNext,
  onPressNext,
  disabled,
}: ScrollFormButtonsProps) {
  return (
    <Container>
      <StyledButton onPress={onPressReturn}>{textReturn}</StyledButton>
      <StyledButton
        onPress={() => {
          if (!disabled) {
            onPressNext();
          }
        }}
        style={disabled && styles.disabledButton}
      >
        {textNext}
      </StyledButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  disabledButton: {
    backgroundColor: "#e2e2e2",
  },
});
