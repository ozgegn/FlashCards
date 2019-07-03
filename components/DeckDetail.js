import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

import { white, gray, green, black, red } from "../utils/color";
import CustomButton from "./CustomButton";

class DeckDetail extends Component {

  render() {
    const { navigation, deck } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}> {deck.name} </Text>
          <Text style={styles.count}> {` ${deck.cards.length} `} Card </Text>
        </View>
        <View style={styles.body}>
          <CustomButton
            onPress={() => navigation.navigate("AddCard", { deckId: deck.id })}
          >
            <Text> Add Card </Text>
          </CustomButton>
          {deck.cards.length !== 0 && (
            <CustomButton onPress={() => navigation.navigate("Quiz", { deck })}>
              Start Quiz
            </CustomButton>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    marginBottom: 5
  },
  count: {
    fontSize: 20,
    color: gray,
    textAlign: "center",
    marginBottom: 5
  },
  body: {
    marginTop: 20
  }
});

const mapStateToProps = (state, { navigation }) => ({
  deck: state[navigation.getParam("deckId")]
});

export default connect(
  mapStateToProps,
  null
)(DeckDetail);
