import React from "react";
import styled from "styled-components/native";

export const StyledButton = styled.Text`
  background-color: #2b772f;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  text-align-vertical: center;

  width: 113px;
  border-radius: 8px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;

  width: 280px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
