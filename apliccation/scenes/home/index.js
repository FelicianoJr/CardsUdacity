import React from "react";
import { BaseView, TextTitle, TopView, BottonView } from "../../util/style";
import Button from "../../component/button";
import Icon from "react-native-vector-icons/Entypo";

export default class Home extends React.PureComponent {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <BaseView>
        <TopView>
          <Icon name="documents" size={70} color="#9c27b0" />
          <TextTitle>Jogo da Memória</TextTitle>
        </TopView>
        <BottonView>
          <Button
            text="Novo Baralho"
            icon="rocket"
            onpress={() => this.props.navigation.navigate("NewDeck")}
          />
          <Button
            text="Meus Baralhos"
            icon="rocket"
            onpress={() => this.props.navigation.navigate("Decks")}
          />

        </BottonView>
      </BaseView>
    );
  }
}
