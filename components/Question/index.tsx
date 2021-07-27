import React from "react";
import { StyledQuestion } from "./styles";

interface QuestionProps {
  title: string;
}

export function Question({ title }: QuestionProps) {
  return <StyledQuestion>{title}</StyledQuestion>;
}
