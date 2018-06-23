import React from "react";
import Button from "../../component/button";
import {
  BaseView,
  TextTitle,
  TopView,
  BottonView,
  TxtSub
} from "../../component/styled";

export default class DeckView extends React.PureComponent {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  state = {
    title: "",
    count: 0
  };

  componentDidMount() {
    const params = this.props.navigation.state.params;
    this.setState({ count: params.numCards, title: params.title });
  }

  addCartao = () =>
    this.props.navigation.navigate("Register", {
      params: this.props.navigation.state.params,
      updateCount: this.updateCount
    });

  backButtonClick = () => {
    this.props.navigation.state.params.onDecks();
    // this.props.navigation.goBack(null);
    return true;
  };

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
          {count > 0 && (
            <Button
              text="Iniciar Quiz"
              onpress={() =>
                this.props.navigation.navigate("Quiz", params.title)
              }
            />
          )}
        </BottonView>
      </BaseView>
    );
  }
}
