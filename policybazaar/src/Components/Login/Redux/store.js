import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
  } from "redux";
  
  import loginReducer from "./Login/loginReducer";
  import { logger } from "redux-logger";
  import thunk from "redux-thunk";
  
   const combReducer = combineReducers({
    login: loginReducer
   })
  const reduxStore = createStore(combReducer, applyMiddleware(logger, thunk));
  
  export default reduxStore;