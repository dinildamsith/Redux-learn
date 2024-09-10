import { createStore } from 'redux';
import customerReducer from "../components/customer/customerReducer.js";


const store = createStore(customerReducer);

export default store;