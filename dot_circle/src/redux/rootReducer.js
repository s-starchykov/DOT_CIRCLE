import {combineReducers} from "redux";
import menuReducer from "./menuReducer";

// Concat all application reducers and set them to Store
const rootReducer = combineReducers({
    menuReducer: menuReducer
})

export default rootReducer;