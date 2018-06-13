import React from "react";
import Button from "../../component/button";
import {
  BaseView,
  TextTitle,
  TopView,
  BottonView,
  TxtSub
} from "../../util/style";

export default class AddCards extends React.PureComponent {
  static navigationOptions = {
    title: "Iniciar Quiz"
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
          <TxtSub fsize="18px"> {`${params.numCards} Cartões`}</TxtSub>
        </TopView>
        <BottonView weight="2">
          <Button text="Adicionar Cartão" onpress={this.addCartao} />
          <Button
            text="Iniciar Quiz"
            onpress={() => this.props.navigation.navigate("Quiz", params.title)}
          />
        </BottonView>
      </BaseView>
    );
  }
}
