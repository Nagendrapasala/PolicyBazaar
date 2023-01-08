import { LOGIN, LOGOUT } from "./loginReducer";

export const loginAction = (userData, dispatch) => {
  dispatch({
    type: LOGIN,
    payload: userData
  });
};

export const logoutAction = (dispatch) => {
  sessionStorage.removeItem("loggedInUserInfo");
  dispatch({
    type: LOGIN,
    payload: "",
  });
}
