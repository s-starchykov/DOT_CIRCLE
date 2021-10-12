import {createStore} from "redux";
import rootReducer from "./rootReducer";

// Crete store object
const store = createStore(rootReducer);

export default store;

// Define store as window global object for debugging
window.store = store;