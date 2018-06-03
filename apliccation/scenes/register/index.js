import React from "react";
import { BaseView, TextInput, TextTitle, TopView } from "../../util/style";
import Button from "../../component/button";

export default class Register extends React.PureComponent {
  static navigationOptions = {
    title: "Cadastrar "
  };
  render() {
    return (
      <BaseView>
        <TopView>
          <TextTitle> Digite uma pergunta seguido de uma resposta!</TextTitle>
        </TopView>
        <TextInput placeholder="Informe uma pergunta" />
        <TextInput placeholder="Informe uma resposta" />
        <Button text="Salvar" />
      </BaseView>
    );
  }
}
