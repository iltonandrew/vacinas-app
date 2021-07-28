import React from "react";
import { StyleSheet } from "react-native";

import RNPickerSelect from "react-native-picker-select";
import { Label } from "./styles";

interface InputProps {
  placeholder: {
    label: string;
    value: string | null;
  };
  onValueChange: (text: string) => void;
  value: string;
  items: Array<{
    label: string;
    value: string;
  }>;
  label?: string;
}

export function Dropdown({
  placeholder,
  onValueChange,
  value,
  items,
  label,
}: InputProps) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <RNPickerSelect
        placeholder={placeholder}
        onValueChange={onValueChange}
        value={value}
        items={items}
        style={customPickerStyles}
      />
    </>
  );
}

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginTop: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 20,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    marginTop: 30,
  },
});
