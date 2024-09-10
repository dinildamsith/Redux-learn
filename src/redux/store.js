import { createStore } from 'redux';
import customerReducer from "../components/reducer.js";


const store = createStore(customerReducer);

export default store;