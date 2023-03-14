import {createStore,applyMiddleware,combineReducers} from 'redux';
// import rootReducer from  './reducers/index.js';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isUserLoggedReducer } from './reducers/loginReducer';
const middlware = [thunk];
const rootReducer = combineReducers({
    login:isUserLoggedReducer
})
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlware))
    );

export default store