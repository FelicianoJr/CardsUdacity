import React from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import Butt from "../../component/button";
import { BaseView, TextTitle, TextInput } from "../../util/style";
import ButtonOption from "../../component/menuOption";

export default class NewDeck extends React.PureComponent {
  static navigationOptions = {
    title: "Novo Cartão"
  };
  render() {
    return (
      <BaseView>
        <TextTitle>Adicionar Novo Cartão</TextTitle>
        <TextInput placeholder="Informe uma pergunta" />
        <ButtonOption icon="save" text="Salvar" />
      </BaseView>
    );
  }
}
