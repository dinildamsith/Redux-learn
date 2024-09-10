import { createStore } from 'redux';
import customerReducer from "../components/customer/reducer.js";


const store = createStore(customerReducer);

export default store;