import { AsyncStorage } from "react-native";

export const MEMORY_CARDS = "memory:cards";

export const getDecks = () =>
  AsyncStorage.getItem(MEMORY_CARDS).then(result => {
    if (result) {
      const decks = JSON.parse(result);
      return Object.keys(decks).map(title => ({
        title,
        numCards: decks[title].questions.length
      }));
    }
    return [];
  });

export const getDeck = title =>
  AsyncStorage.getItem(MEMORY_CARDS).then(result => ({
    ...JSON.parse(result)[title]
  }));

export const saveDeckTitle = title => {
  let deck = {};
  deck[title] = { title, questions: [] };
  return AsyncStorage.mergeItem(MEMORY_CARDS, JSON.stringify(deck));
};

export const addCardToDeck = (title, card, deck) =>
  AsyncStorage.mergeItem(
    MEMORY_CARDS,
    JSON.stringify({
      [title]: {
        questions: [...deck.questions,{ ...card }]
      }
    })
  );
