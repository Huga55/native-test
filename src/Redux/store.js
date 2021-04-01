import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import itemReducer from "./ItemReducer";
import appReducer from "./AppReducer";


const rootReducer = combineReducers({
    item: itemReducer,
    app: appReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;