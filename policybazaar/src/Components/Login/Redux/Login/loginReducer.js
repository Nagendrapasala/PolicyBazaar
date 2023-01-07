export const LOGIN = "LOGIN";

const initState = {
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
    default:
      return state;
  }
};
export default loginReducer;
