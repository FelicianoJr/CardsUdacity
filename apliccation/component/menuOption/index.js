import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Icone, ViewCenter } from "../../util/style";
import Icon from "react-native-vector-icons/FontAwesome";

const ButtonOption = ({ onpress, text, icon }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Icone style={styles.tt}>
        <Icon name={icon} size={25} color="#9c27b0" />
      </Icone>
      <View style={styles.tt1}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#68efad",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#9c27b0"
  },
  tt: {
    flex:1,
    backgroundColor:'rosybrown'
  }, tt1: {
    flex:2,
    backgroundColor:'skyblue'
  }
});

export default ButtonOption;
