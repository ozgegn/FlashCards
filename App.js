import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Constants from "expo-constants";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import { Feather } from "@expo/vector-icons";

import reducer from "./reducers";
import { lightPurp, white } from "./utils/color";
import AddDeck from "./components/AddDeck";
import Decks from "./components/Decks";
import DeckItem from "./components/DeckItem";
import DeckDetail from "./components/DeckDetail";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";
import { setLocalNotification } from "./utils/helper";

const MainStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBatLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="list" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add New Deck",
        tabBarIcon: ({ tintColor }) => (
          <Feather name="plus" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: lightPurp,
      style: {
        height: 60,
        backgroundColor: white,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      labelStyle: {
        paddingTop: 3,
        fontSize: 14,
        fontWeight: "bold"
      }
    }
  }
);

const MainNavigator = createStackNavigator(
  {
    Home: Tabs,
    DeckItem: DeckItem,
    DeckDetail: DeckDetail,
    AddCard: AddCard,
    Quiz: Quiz
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerTintColor: white,
      headerStyle: { backgroundColor: lightPurp },
      headerTitleStyle: { fontWeight: "bold" }
    }
  }
);

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <MainStatusBar backgroundColor={lightPurp} barStyle="light-content" />
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

export default App;
