import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import bucket from "./modules/bucket";
import wordModule from "./modules/wordModule";

// const rootReducer = combineReducers({bucket});

// const store = createStore(rootReducer);


const middlewares = [thunk];
const rootReducer = combineReducers({wordModule});
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
