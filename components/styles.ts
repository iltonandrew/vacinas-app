import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Base = styled.SafeAreaView`
  flex: 1;
  flex-grow: 1;
  height: 100%;
`;

export const SyncBase = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const FormBase = styled.ScrollView`
  flex: 1;
  flex-grow: 1;
  height: 100%;
`;

export const Background = styled(LinearGradient)`
  flex-grow: 1;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const RegisterButton = styled.TouchableOpacity`
  background: #98de66;
  padding: 8px 12px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 24px;
  border: 2px #e31b78;
`;

export const RegisterButtonText = styled.Text`
  font-size: 24px;
  color: #e31b78;
`;

export const LogoArea = styled.View`
  height: 400px;
  margin-bottom: 100px;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 80px;
  width: 80px;
`;

export const LogoText1 = styled.Text`
  font-size: 64px;
  color: #98de66;
`;
export const LogoText2 = styled.Text`
  font-size: 64px;
  color: #e31b78;
`;

export const SyncWrapper = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const SyncTextWrapper = styled.View`
  align-items: center;
`;

export const SyncText = styled.Text`
  text-decoration: underline;
  font-size: 14px;
  color: #c4ffb2;
`;

export const SyncImage = styled.Image`
  margin-right: 12px;
  height: 48px;
  width: 48px;
`;

export const FormInput = styled.TextInput`
  background-color: #fff;
  padding: 0 12px;
  width: 95%;
  height: 32px;
  margin-bottom: 12px;
  border-radius: 25px;
  border: 2px #e31b78;
`;

export const FormHeader = styled.View`
  flex-direction: row;
  align-items: center;
  width: 95%;
  margin: 24px 0;
`;
export const FormHeaderText = styled.Text`
  color: #e31b78;
  font-size: 26px;
  width: 100%;
`;

export const FormHeaderImage = styled.Image`
  height: 64px;
  width: 64px;
`;

export const SubmitButtonsWrapper = styled.View`
  margin-top: 12px;
  /* justify-content: space-between; */
  flex-direction: row;
  /* align-items: center; */
`;

export const GoBackButton = styled.TouchableOpacity`
  width: 112px;
  background: #de6c66;
  padding: 4px 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 24px;
  border: 2px #e31b78;
  margin-right: 8px;
`;

export const GoBackButtonText = styled.Text`
  font-size: 16px;
  color: black;
`;
export const SubmitButton = styled.TouchableOpacity`
  width: 112px;
  justify-content: space-evenly;
  background: #98de66;
  padding: 4px 8px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 24px;
  border: 2px #e31b78;
`;

export const SubmitButtonText = styled.Text`
  align-items: center;
  text-align: center;
  font-size: 16px;
  color: #e31b78;
`;
export const SaveButton = styled.TouchableOpacity`
  width: 112px;
  background: #98d2eb;
  padding: 4px 8px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 24px;
  border: 2px #e31b78;
  margin-right: 8px;
`;

export const SaveButtonText = styled.Text`
  font-size: 16px;
  align-items: center;
  text-align: center;
  color: #e31b78;
`;

export const SyncInfoButton = styled.TouchableOpacity`
  width: 320px;
  background: #98de66;
  padding: 8px 12px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 24px;
  border: 2px #e31b78;
`;

export const SyncReturnButton = styled.TouchableOpacity`
  width: 320px;
  background: #98d2eb;
  padding: 8px 12px;
  border-radius: 8px;
  align-items: center;
  margin-bottom: 24px;
  border: 2px #19647e;
`;

export const SyncReturnButtonText = styled.Text`
  font-size: 24px;
  color: #19647e;
`;
