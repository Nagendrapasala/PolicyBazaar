import {legacy_createStore as mystore,applyMiddleware,combineReducers} from "redux"
import {logger} from "redux-logger"
import { Reducer } from "./Reducer"

export const Store = mystore(Reducer,applyMiddleware(logger))