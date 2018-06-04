import React from "react";
import Button from "../../component/button";
import { BaseView, TextTitle, TopView, BottonView } from "../../util/style";
import { Text } from "react-native";

export default class AddCards extends React.PureComponent {
  static navigationOptions = {
    title: ""
  };

  addCartao = () =>
    this.props.navigation.navigate("Register", {
      params: this.props.navigation.state.params
    });

  render() {
    const params = this.props.navigation.state.params;
    return (
      <BaseView>
        <TopView>
          <TextTitle> {params.title}</TextTitle>
          <Text> {`${params.numCards} Cartões`}</Text>
        </TopView>
        <BottonView weight="2">
          <Button text="Adicionar Cartão" onpress={this.addCartao} />
          <Button
            text="Iniciar Quiz"
            onpress={() => this.props.navigation.goBack()}
          />
        </BottonView>
      </BaseView>
    );
  }
}
