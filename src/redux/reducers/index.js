import foodItemSlice from "./foodItems";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  foodItemSlice: foodItemSlice,
});

export default rootReducer;
