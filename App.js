/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import Register from "./apliccation/scenes/register";
import Decks from "./apliccation/scenes/decks";
import DeckView from "./apliccation/scenes/DeckView";
import NewDeck from "./apliccation/scenes/NewDeck";
import Quiz from "./apliccation/scenes/quiz";

const Tabs = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: "Baralhos"
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "Novo Baralho"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: "white",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "purple"
      }
    }
  }
);

const RootStack = StackNavigator(
  {
    Home: {
      screen: Tabs
    },
    Register: {
      screen: Register
    },
    DeckView: {
      screen: DeckView
    },
    NewDeck: {
      screen: NewDeck
    },
    Quiz: {
      screen: Quiz
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "purple"
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
