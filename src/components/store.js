import { createStore } from 'redux';
import customerReducer from "./reducer.js";


const store = createStore(customerReducer);

export default store;