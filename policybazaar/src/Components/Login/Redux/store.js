import {
    legacy_createStore as createStore,
    applyMiddleware,
  } from "redux";
  
  import loginReducer from "./Login/loginReducer";
  import { logger } from "redux-logger";
  import thunk from "redux-thunk";
  
   
  const reduxStore = createStore(loginReducer, applyMiddleware(logger, thunk));
  
  export default reduxStore;