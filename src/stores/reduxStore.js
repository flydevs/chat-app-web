<<<<<<< HEAD
import {createStore, applyMiddleware, compose} from 'redux'
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers'

const middleware = [ReduxThunk];
=======
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [thunk];
const initialState = {};
>>>>>>> 652a8eb8edd60875041dd5b79b0a63670e25d8ab


const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;