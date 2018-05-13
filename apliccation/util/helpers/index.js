import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/";

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20
  }
});

export function getMenuInfo() {
  const info = {
    deck: {
      displayName: "new Deck",
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: red }]}>
            <Icon name="rocket" size={18} color="#999"/>
          </View>
        );
      }
    },

    dek: {
        displayName: "new noves",
        getIcon() {
          return (
            <View style={[styles.iconContainer, { backgroundColor: red }]}>
              <Icon name="rocket" size={18} color={white}/>
            </View>
          );
        }
      },
  };
}
