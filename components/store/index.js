import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index'; //Import the reducer


;

// Connect our store to the reducers
const store = createStore(rootReducer, applyMiddleware(thunk));



export default store;




