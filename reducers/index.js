import {
  ADD_DECK,
  RECEIVE_ALL_DECKS,
  RECEIVE_DECK,
  CREATE_CARD
} from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          name: action.name,
          cards: []
        }
      };
    case RECEIVE_ALL_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case RECEIVE_DECK:
      return {
        ...state,
        ...action.deck
      };
    case CREATE_CARD:
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          cards: [
            ...state[action.deckId].cards,
            { question: action.question, answer: action.answer }
          ]
        }
      };
    default:
      return state;
  }
}
