import { combineReducers, createStore } from "redux";
import { QuanLyDatGheReducer } from "./QuanLyDatGheReducer";

const rootReducer = combineReducers({
  QuanLyDatGheReducer: QuanLyDatGheReducer
})

export const store = createStore(rootReducer)