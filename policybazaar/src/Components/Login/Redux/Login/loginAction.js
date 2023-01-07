import { LOGIN } from "./loginReducer";

export const loginAction = (userData, dispatch) => {
  dispatch({
    type: LOGIN,
    payload: userData
  });
};

export const loginThunkAction = (dispatch, getState) => {
  const userData = JSON.parse(sessionStorage.getItem("loggedInUserInfo"));
  if(! getState().isAuth && userData ) {
    dispatch({
      type: LOGIN,
      payload: userData
    });
  }
}