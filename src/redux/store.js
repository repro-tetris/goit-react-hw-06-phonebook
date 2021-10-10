import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import contactReducer from "./contacts";
import { loadContacts, saveContacts } from "../components/utils/storage";

const rootReducer = combineReducers({
  contacts: contactReducer,
});

const persistedState = {
  contacts: {
    items: loadContacts(),
  },
};

const store = createStore(rootReducer, persistedState, devToolsEnhancer());

store.subscribe(() => {
  saveContacts(store.getState().contacts.items);
});

export default store;
