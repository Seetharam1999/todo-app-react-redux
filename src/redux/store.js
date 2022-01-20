import { createStore } from "redux";
import addReducer from './todo/todoReducer'

const store = createStore(addReducer);

export default store;

