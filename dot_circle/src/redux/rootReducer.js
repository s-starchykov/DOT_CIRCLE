import {combineReducers} from "redux";
import headerReducer from "./headerReducer";

// Concat all application reducers and set them to Store
const rootReducer = combineReducers({
    headerReducer
})

export default rootReducer;