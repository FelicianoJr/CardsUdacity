import React from "react";
import { FlatList, View } from "react-native";
import {
  TouchableItem,
  TxtSub,
  BaseView,
  TopView
} from "../../component/styled";
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
    data: []
  };

  componentDidMount() {
    this.props.navigation.setParams({
      onFocus: this._onDecks
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
        {Object.keys(this.state.data).length === 0 && (
          <BaseView>
            <TxtSub fsize="15px">Nenhum baralho criado!</TxtSub>
          </BaseView>
        )}
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.title}
          renderItem={this.renderCards}
          onRefresh={this._onDecks}
          refreshing={false}
        />
      </View>
    );
  }
}
