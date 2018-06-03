import React from "react";
import Button from "../../component/button";
import { BaseView, TextTitle, TopView } from "../../util/style";
import { Text } from "react-native";

export default class MenuCard extends React.PureComponent {
  static navigationOptions = {
    title: ""
  };

  //addCartao = () => this.props.navigation.navigate("MenuCard");

  render() {
    const params = this.props.navigation.state.params;
    return (
      <BaseView>
        <TopView>
          <TextTitle> {params.title}</TextTitle>
          <Text> {`${params.numCards} Cartões`}</Text>
        </TopView>
        <Button text="Adicionar Cartão"/>
        <Button text="Iniciar Quiz" />
      </BaseView>
    );
  }
}
