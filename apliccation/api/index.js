import { AsyncStorage } from "react-native";

export const DECKS_STORAGE_KEY = "flashcards:decks";

export const getDecks = () =>
  AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
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
  AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => ({
    ...JSON.parse(result)[title]
  }));

export const saveDeckTitle = title => {
  console.log("PAssou aki")
  let deck = {};
  deck[title] = { title, questions: [] };
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
};
