import React from "react";
import { AsyncStorage, Alert } from "react-native";
import Button from "../../component/button";
import { BaseView, TextTitle, TextInput, TopView } from "../../util/style";
//import {saveDeckTitle} from "../../api";
const DECKS_STORAGE_KEY = "flashcards:decks";

export default class NewDeck extends React.PureComponent {
  static navigationOptions = {
    title: "Novo Baralho"
  };

  state = {
    title: ""
  };

  componentDidMount() {
    //AsyncStorage.removeItem(DECKS_STORAGE_KEY);
    AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
      console.log("result", result);
      // if (result) {
      //     const decks = JSON.parse(result)
      //     return Object.keys(decks).map((title) => ({
      //         title,
      //         numCards: decks[title].questions.length
      //     }))
      // }
      // return []
    });
  }

  save = () => {
    const { title } = this.state;
    console.log("save");
    try {
      let deck = {};
      deck[title] = { title, questions: [] };
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
      Alert.alert(
        "",
        "Salvo com sucesso!",
        [
          {
            text: "OK",
            onPress: () => this.props.navigation.navigate("Menu",  title )
          }
        ],
        {
          cancelable: false
        }
      );
    } catch (error) {
      console.log("Error saving data" + error);
    }
  };

  handle = title => this.setState({ title });
  
  render() {
    return (
      <BaseView>
        <TopView>
          <TextTitle>Adicionar Novo Baralho</TextTitle>
        </TopView>
        <TextInput
          value={this.state.title}
          placeholder="Informe um novo baralho"
          onChangeText={this.handle}
        />
        <Button text="Salvar" onpress={this.save} />
      </BaseView>
    );
  }
}
