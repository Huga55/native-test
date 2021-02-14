import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import filmReducer from "./FilmReducer";
import bookReducer from "./BookReducer";


const rootReducer = combineReducers({
    films: filmReducer,
    books: bookReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;