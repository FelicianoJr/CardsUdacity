import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { BaseView, SwipButton, Touchable } from "../../util/style";
import { AsyncStorage } from "react-native";
const DECKS_STORAGE_KEY = "flashcards:decks";
const k = "#FFFFFF";

export default class FlatListBasics extends React.Component {
  static navigationOptions = {
    title: "Meus Baralhos"
  };

  // static navigationOptions = ({ navigation }) =>
  // navOptions(navigation.state.params.title)

  state = {
    data: {}
    // { id: "00", name: "Futebol", tt: "6" },
    // { id: "01", name: "Ingles", tt: "10" },
    //{ id: "02", name: "Doc Hudson", tt: "5" },
    //{ id: "03", name: "Cruz Ramirez", tt: "2" }
  };

  componentDidMount() {
    AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
      console.log("result", result);
      const decks = JSON.parse(result);
      const soap = Object.keys(decks).map(title => ({
        title,
        numCards: decks[title].questions.length
      }));
      this.setState({ data: soap });
      // if (result) {
      //     const decks = JSON.parse(result)
      //     return Object.keys(decks).map((title) => ({
      //         title,
      //         numCards: decks[title].questions.length
      //     }))
      // }
      // return []
    });
  }

  rend = ({ item }) => (
    <SwipButton
      color={k}
      onPress={() => this.props.navigation.navigate("MenuCard", item)}
    >
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.numCards}</Text>
    </SwipButton>
  );

  rend2 = ({ item }) => (
    <TouchableOpacity style={{ paddingVertical: 30 }}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.numCards}</Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.title}
          renderItem={this.rend}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    margin: 4,
    padding: 20,
    fontSize: 16
  },
  text: {
    color: "#9c27b0",
    fontWeight: "bold",
    fontSize: 16
  }
});
