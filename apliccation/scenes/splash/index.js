import React from "react";
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import Butt from "../../component/button";
import { BaseView } from "../../util/style";

export default class Splash extends React.Component {
  static navigationOptions = {
    title: "cadastrar"
  };
  render() {
    return (
      <BaseView>
        <Text style={styles.title}>Escreva o nome!</Text>
        <TextInput style={styles.txtInput} placeholder="informe" />
        <Butt text="salvar" />
      </BaseView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 140,
    alignItems: "center",
    marginTop: 10,
    fontSize: 26,
    color: "#ba68c8",
    fontWeight: "bold"
  },
  txtInput: {
    marginTop: 20
  }
});
