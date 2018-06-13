import React from "react";
import Button from "../../component/button";
import {
  BaseView,
  TextTitle,
  TopView,
  BottonView,
  TxtSub
} from "../../component/styled";

export default class AddCards extends React.PureComponent {
  static navigationOptions = {
    title: "Iniciar Quiz"
  };

  state = {
    count: 0
  };

  componentDidMount() {
    const params = this.props.navigation.state.params;
    this.setState({ count: params.numCards });
  }

  addCartao = () =>
    this.props.navigation.navigate("Register", {
      params: this.props.navigation.state.params,
      updateCount: this.updateCount
    });

  updateCount = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  render() {
    const params = this.props.navigation.state.params;
    const { count } = this.state;
    return (
      <BaseView>
        <TopView>
          <TextTitle> {params.title}</TextTitle>
          <TxtSub fsize="18px"> {`${count} Cartões`}</TxtSub>
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
