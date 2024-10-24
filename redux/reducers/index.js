import { combineReducers } from "redux";
import homeSlice from "./homeReducerKit"
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default combineReducers({
  home: homeSlice,
});
