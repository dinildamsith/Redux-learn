import { combineReducers, createStore } from 'redux';
import customerReducer from "../components/customer/customerReducer.js";
import Reducer from "../components/testing/reducer.js";
import userReducerFunction from "../components/detilsTable/userReducer.js";


const rootReducer = combineReducers({
    customer: customerReducer,
    reducer: Reducer,
    userReducer: userReducerFunction
});

const store = createStore(rootReducer);

export default store;
