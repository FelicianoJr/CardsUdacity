import React from "react";
import { FlatList, Text, View } from "react-native";
import { TouchableItem, TxtSub } from "../../component/styled";
import { getDecks } from "../../api";
const color = "#FFFFFF";

export default class Decks extends React.PureComponent {
  static navigationOptions = {
    title: "Meus Baralhos"
  };

  state = {
    data: {}
  };

  componentDidMount() {
    getDecks().then(response => this.setState({ data: response }));
  }

  renderCards = ({ item }) => (
    <TouchableItem
      color={color}
      onPress={() => this.props.navigation.navigate("AddCards", item)}
    >
      <TxtSub fsize="20px">{item.title}</TxtSub>
      <TxtSub>{`${item.numCards} Cartões`}</TxtSub>
    </TouchableItem>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.title}
          renderItem={this.renderCards}
        />
      </View>
    );
  }
}
