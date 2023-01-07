import { TOTAL_AMT } from "./action";

const initState = {
  total_amt: 0,
};

export const reducer = (store = initState, action) => {
  switch (action.type) {
    case TOTAL_AMT:
      return {
        ...store,
        total_amt: action.payload,
      };

    default:
      return store;
  }
};
