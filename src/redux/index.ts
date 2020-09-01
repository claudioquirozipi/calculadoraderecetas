import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { loadStore, saveStore } from "./store";

import { holaReducer } from "./hola/reducer";
import { recipesReducer } from "./recipes/reducer";
import { salesReducer } from "./sales/reducer";
import { configReducer } from "./config/reducer";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

// const initialState = {};
const initialState: any = loadStore();

const reducer = combineReducers({
  holaReducer,
  recipesReducer,
  salesReducer,
  configReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => saveStore(store.getState()));

export default store;
