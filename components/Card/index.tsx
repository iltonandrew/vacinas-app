import React from "react";
import { CardAttribute, CardAttributeName, StyledCard } from "./styles";

interface CardProps {
  firstName: string;
  cpf: string;
}

export function Card({ firstName, cpf }: CardProps) {
  return (
    <StyledCard>
      <CardAttribute>
        <CardAttributeName>CPF:</CardAttributeName> {cpf}
      </CardAttribute>
      <CardAttribute>
        <CardAttributeName>Nome:</CardAttributeName> {firstName}
      </CardAttribute>
    </StyledCard>
  );
}
