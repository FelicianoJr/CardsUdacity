import React from "react";
import { FlatList, View } from "react-native";
import { TouchableItem, TxtSub } from "../../component/styled";
import { getDecks } from "../../api";
const color = "#FFFFFF";

export default class Decks extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      tabBarOnPress: ({ jumpToIndex, scene }) => {
        if (!scene.focused) {
          jumpToIndex(scene.index);
          navigation.state.params.onFocus();
        }
      }
    };
  };

  state = {
    data: {}
  };

  componentDidMount() {
    this.props.navigation.setParams({
      onFocus: this._onDecks.bind(this)
    });

    this._onDecks();
  }

  _onDecks = () => {
    getDecks().then(response => this.setState({ data: response }));
  };

  renderCards = ({ item }) => (
    <TouchableItem
      color={color}
      onPress={() => this.props.navigation.navigate("DeckView", item)}
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
