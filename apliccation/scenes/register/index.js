import React from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { BaseView, TextInput, TextTitle } from "../../util/style";
import ButtonOption from "../../component/menuOption";

export default class Register extends React.Component {
  static navigationOptions = {
    title: "Cadastrar"
  };
  render() {
    return (
      <BaseView>
        <TextTitle> Digite uma pergunta seguido de uma resposta!</TextTitle>
        <TextInput placeholder="Informe uma pergunta"/>
        <TextInput placeholder="Informe uma resposta"/>
        <ButtonOption icon="save" text="Salvar" />
      </BaseView>
    );
  }
}

