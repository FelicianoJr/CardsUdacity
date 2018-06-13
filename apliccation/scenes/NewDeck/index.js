import React from "react";
import { Alert } from "react-native";
import Button from "../../component/button";
import {
  BaseView,
  TextTitle,
  TextInput,
  TopView,
  BottonView
} from "../../util/style";
import { saveDeckTitle } from "../../api";

export default class NewDeck extends React.PureComponent {
  static navigationOptions = {
    title: "Novo Baralho"
  };

  state = {
    title: ""
  };

  save = () => {
    const { title } = this.state;
    if (!title) {
      return this.alertFail();
    }
    try {
      saveDeckTitle(title).then(response => {
        this.alertOk(title);
      });
    } catch (error) {
      console.log("Error" + error);
    }
  };

  alertOk = title => {
    Alert.alert(
      "",
      "Baralho criado!",
      [
        {
          text: "OK",
          onPress: () => this.props.navigation.navigate("Decks", title)
        }
      ],
      {
        cancelable: false
      }
    );
  };

  alertFail = () => {
    Alert.alert(
      "",
      "Digite um titulo para o baralho!",
      [
        {
          text: "OK"
        }
      ],
      {
        cancelable: false
      }
    );
  };

  handle = title => this.setState({ title });

  render() {
    return (
      <BaseView>
        <TopView>
          <TextTitle>Adicionar Novo Baralho</TextTitle>
        </TopView>
        <BottonView weight="2">
          <TextInput
            value={this.state.title}
            placeholder="Informe o nome do baralho"
            onChangeText={this.handle}
          />
          <Button text="Salvar" onpress={this.save} />
        </BottonView>
      </BaseView>
    );
  }
}
