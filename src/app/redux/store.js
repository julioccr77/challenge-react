import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'

import riskDuck from "./ducks/riskDuck";


import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  riskDuck: riskDuck,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default function generateStore(){
  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
  let persistor = persistStore(store);
  return { store, persistor }
}
