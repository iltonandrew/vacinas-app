import React from "react";
import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding-left: 40px;
  padding-right: 40px;
`;

export const DetailText = styled.Text`
  margin-top: 15px;
  margin-bottom: -15px;
  font-size: 16px;
`;
