import {combineReducers} from "redux";
import menuReducer from "./menuReducer";
import galleryReducer from "./galleryReducer";

// Concat all application reducers and set them to Store
const rootReducer = combineReducers({
    menuReducer: menuReducer,
    galleryReducer: galleryReducer
})

export default rootReducer;