/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import Splash from "./apliccation/scenes/splash";
import Deck from "./apliccation/scenes/deck";
import Register from "./apliccation/scenes/register";
import FlatListBasics from "./apliccation/scenes/menu";
import MenuCard from "./apliccation/scenes/MenuCard";
import NewDeck from "./apliccation/scenes/NewDeck";

const RootStack = StackNavigator(
  {
    Home: {
      screen: Deck
    },
    Splash: {
      screen: Splash
    },
    Register: {
      screen: Register
    },
    MenuCard: {
      screen: MenuCard
    },
    NewDeck: {
      screen: NewDeck
    },
    Menu: {
      screen: FlatListBasics
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
