import { applyMiddleware, combineReducers, createStore } from "redux";

import thunk from "redux-thunk";
import { initialState } from "./initialState";

//Link reducers of all modules here
import { search } from "./redux_search";

let reducers = combineReducers({
  search
});

//Store
let configureStore = initialState => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
};

const store = configureStore(initialState);

export default store;
