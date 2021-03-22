import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import nameReducer from "./namePerson/reducers";
const reducers = combineReducers({
    name: nameReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
