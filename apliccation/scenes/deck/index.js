import React from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";

import { BaseView } from "../../util/style";
import ButtonOption from "../../component/menuOption";
import Icon from "react-native-vector-icons/Entypo";

export default class Deck extends React.PureComponent {
  render() {
    return (
      <BaseView>
        <View style={styles.item}>
          <Icon name="documents" size={70} color="#9c27b0" />
          <Text style={styles.text}>Memory Cards</Text>
        </View>
        <ButtonOption
          text="New Deck" icon="rocket"
          onpress={() => this.props.navigation.navigate("Register")}
        />
        <ButtonOption
          text="card" icon="heart"
          onpress={() => this.props.navigation.navigate("MenuCard")}
        />
        <ButtonOption
          text="New Deck" icon="linode"
          onpress={() => this.props.navigation.navigate("Menu")}
        />
        <ButtonOption
          text="New Deck" icon="linode"
          onpress={() => this.props.navigation.navigate("NewDeck")}
        />
      </BaseView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
  //  backgroundColor: "#68efad",
    height: 144,
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#9c27b0"
  }
});
