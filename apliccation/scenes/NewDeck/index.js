import React from "react";
import { AsyncStorage, Alert } from "react-native";
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

  componentDidMount() {
    // AsyncStorage.removeItem(DECKS_STORAGE_KEY);
  }

  save = () => {
    const { title } = this.state;
    try {
      saveDeckTitle(title).then(response => {
        this.alertOk(title);
      });
    } catch (error) {
      console.log("Error saving data" + error);
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
