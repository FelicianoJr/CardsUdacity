import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const Butt = ({ onpress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onpress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#68efad",
    padding: 10,
    alignItems: "center",
    marginTop: 20
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1b5e20"
  }
});

export default Butt;
