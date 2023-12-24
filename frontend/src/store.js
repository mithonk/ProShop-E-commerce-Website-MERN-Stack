import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducers';

const Reducere = combineReducers({
  productList : productListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  Reducere,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
