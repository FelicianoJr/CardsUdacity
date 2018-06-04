/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import Home from "./apliccation/scenes/home";
import Register from "./apliccation/scenes/register";
import Decks from "./apliccation/scenes/decks";
import AddCards from "./apliccation/scenes/addCards";
import NewDeck from "./apliccation/scenes/NewDeck";

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home
    },
    Register: {
      screen: Register
    },
    AddCards: {
      screen: AddCards
    },
    NewDeck: {
      screen: NewDeck
    },
    Decks: {
      screen: Decks
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#9C27B0"
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
