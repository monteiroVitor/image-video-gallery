import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import fetchedData from './fetchedData';

const reducer = combineReducers({
  fetchedData,
});

export default createStore(reducer, applyMiddleware(thunk));
