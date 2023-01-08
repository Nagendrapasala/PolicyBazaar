export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const userData = JSON.parse(sessionStorage.getItem("loggedInUserInfo"));

const initState =(userData) ? userData : {
  isAuth: false,
  name: "",
  phoneNumber: "",
};

const loginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return {
        ...state,
        name: payload.name,
        phoneNumber: payload.phoneNumber,
        isAuth: payload.isAuth,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        name: "",
        phoneNumber: "",
        isAuth: false,
      };
    }
    default:
      return state;
  }
};
export default loginReducer;
