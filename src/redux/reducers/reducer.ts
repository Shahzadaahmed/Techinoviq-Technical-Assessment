/***** Main reducer configuration *****/

import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "./app-reducer/app-reducer";

// Note: Persist reducer configuration...!
const persistConfig = {
    key: "root",
    storage,
    whitelist: ['appStates']
};

const rootReducer = combineReducers({
    appStates: appReducer
});

export default persistReducer(persistConfig, rootReducer);