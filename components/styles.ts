import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Base = styled.SafeAreaView`
  flex: 1;
`;

export const Background = styled(LinearGradient)`
  flex: 1;
  align-items: center;
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
  color: #2f3425;
`;

export const SyncImage = styled.Image`
  margin-right: 12px;
  height: 48px;
  width: 48px;
`;
