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

export const Logo = styled.Image`
  height: 80px;
  width: 80px;
  align-self: center;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  align-self: center;
  font-size: 60px;
  color: black;

  margin-bottom: 170px;
`;

export const TitleSpan = styled.Text`
  color: #2b772f;
`;

export const SyncButton = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 280px;
  margin-top: 10px;
`;

export const SyncImage = styled.Image`
  width: 48px;
  height: 48px;
`;

export const SyncText = styled.Text`
  color: #2b772f;
  text-decoration: underline;
  text-align: center;
`;
