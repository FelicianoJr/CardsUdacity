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
import { BaseView, TextTitle } from "../../util/style";

export default class MenuCard extends React.Component {
  static navigationOptions = {
    title: "MenuCard"
  };
  render() {
    return (
      <BaseView>
        <TextTitle> MenuCard</TextTitle>
        <Butt text="sadd" icon="rocket" />
        <Butt text="salvar" />
      </BaseView>
    );
  }
}
