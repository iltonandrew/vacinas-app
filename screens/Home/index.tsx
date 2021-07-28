import React from "react";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../types";
import {
  Logo,
  Title,
  TitleSpan,
  Container,
  SyncButton,
  SyncText,
} from "./styles";
import { GenericButton } from "../../components/GenericButton";
import { SyncImage } from "../../components";

export function Home({
  navigation,
}: StackScreenProps<RootStackParamList, "Home">) {
  return (
    <Container>
      <Logo source={require("../../assets/images/syringe.png")} />
      <Title>
        Vaci<TitleSpan>Vida</TitleSpan>
      </Title>
      <GenericButton
        text="Faça já o seu pré-cadastro!"
        onPress={() => navigation.push("FormFirstName")}
      />
      <SyncButton onTouchStart={() => navigation.push("Sync")}>
        <SyncImage source={require("../../assets/images/cloud.png")} />
        <SyncText>
          Realizou o cadastro offline?{"\n"}Clique aqui para enviá-lo!
        </SyncText>
      </SyncButton>
    </Container>
  );
}
