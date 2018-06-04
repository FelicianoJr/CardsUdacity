import React from "react";
import { FlatList, Text, View } from "react-native";
import { TouchableItem,TxtSub } from "../../util/style";
import { getDecks } from "../../api";

const k = "#FFFFFF";

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
      color={k}
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
