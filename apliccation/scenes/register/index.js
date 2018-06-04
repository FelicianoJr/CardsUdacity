import React from "react";
import { Alert } from "react-native";
import {
  BaseView,
  TextInput,
  TextTitle,
  TopView,
  BottonView
} from "../../util/style";
import Button from "../../component/button";
import { addCardToDeck, getDeck } from "../../api";

export default class Register extends React.PureComponent {
  static navigationOptions = {
    title: "Criar Cartão"
  };

  state = {
    question: "",
    answer: ""
  };

  save = () => {
    const { question, answer } = this.state;
    const { params } = this.props.navigation.state.params;
    try {
      getDeck(params.title).then(deck => {
        addCardToDeck(params.title, { question, answer }, deck);
        this.alertOk();
      });
    } catch (error) {
      console.log("Error saving data" + error);
    }
  };

  alertOk = () => {
    Alert.alert(
      "",
      "Cartão criado!",
      [
        {
          text: "OK",
          onPress: () => this.props.navigation.goBack()
        }
      ],
      {
        cancelable: false
      }
    );
  };

  handleAnswer = answer => this.setState({ answer });

  handleQuestion = question => this.setState({ question });

  render() {
    return (
      <BaseView>
        <TopView>
          <TextTitle> Digite uma Pergunta e uma Resposta!</TextTitle>
        </TopView>
        <BottonView weight="2">
          <TextInput
            placeholder="Informe a Pergunta"
            value={this.state.question}
            onChangeText={this.handleQuestion}
          />
          <TextInput
            placeholder="Informe a Resposta"
            value={this.state.answer}
            onChangeText={this.handleAnswer}
          />
          <Button text="Salvar" onpress={this.save} />
        </BottonView>
      </BaseView>
    );
  }
}
