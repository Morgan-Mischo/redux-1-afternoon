import { createStore } from "redux";

const initialState = {
  name: "",
  category: ""
};

export const NAME_UPDATE = "NAME_UPDATE";
export const CATEGORY_UPDATE = "CATEGORY_UPDATE";

function reducer(state = initialState, action) {
  console.log("state in reducer \n", state);
  const { type, payload } = action;

  switch (type) {
    case NAME_UPDATE:
      return {
        ...state,
        name: payload
      };
    case CATEGORY_UPDATE:
      return {
        ...state,
        name: payload
      };

    default:
      return state;
  }
}

export default createStore(reducer);
