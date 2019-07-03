export const ADD_DECK = "ADD_DECK";
export const RECEIVE_ALL_DECKS = "RECEIVE_ALL_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const CREATE_CARD = "CREATE_CARD";

export function addDeck(id, name) {
  return {
    type: ADD_DECK,
    id,
    name
  };
}

export function receiveAllDecks(decks) {
  return {
    type: RECEIVE_ALL_DECKS,
    decks
  };
}

export function receiveDeck(deck) {
  return {
    type: RECEIVE_DECK,
    deck
  };
}

export function createCard(deckId, question, answer) {
  return {
    type: CREATE_CARD,
    deckId,
    question,
    answer
  };
}
