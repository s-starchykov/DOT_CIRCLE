import {combineReducers} from "redux";
import menuReducer from "./menuReducer";
import galleryReducer from "./galleryReducer";
import usefulPageReducer from "./usefulPageReducer";

// Concat all application reducers and set them to Store
const rootReducer = combineReducers({
    menuReducer: menuReducer,
    galleryReducer: galleryReducer,
    usefulPageReducer: usefulPageReducer
})

export default rootReducer;