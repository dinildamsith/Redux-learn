import { combineReducers, createStore } from 'redux';
import customerReducer from "../components/customer/customerReducer.js";
import Reducer from "../components/testing/reducer.js";


const rootReducer = combineReducers({
    customer: customerReducer,
    reducer: Reducer
});

const store = createStore(rootReducer);

export default store;
