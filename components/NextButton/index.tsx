import React from "react";
import { StyleSheet } from "react-native";
import { StyledButton } from "./style";

interface NextButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

export function NextButton({ text, onPress, disabled }: NextButtonProps) {
  return (
    <StyledButton
      onPress={() => {
        if (!disabled) {
          onPress();
        }
      }}
      style={disabled && styles.disabledButton}
    >
      {text}
    </StyledButton>
  );
}

const styles = StyleSheet.create({
  disabledButton: {
    backgroundColor: "#e2e2e2",
  },
});
