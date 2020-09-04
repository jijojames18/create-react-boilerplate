import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import itemReducer from "./item/item.reducer";

const persistConfig = {
  key: process.env.REACT_APP_PERSIST_KEY,
  storage,
};

const rootReducer = combineReducers({
  items: itemReducer,
});

export default persistReducer(persistConfig, rootReducer);
