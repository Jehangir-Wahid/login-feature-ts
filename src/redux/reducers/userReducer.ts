import { Action } from "../actions/index"
import { ActionTypes } from "../action-types";

const initialState = {
  username: "",
  token: "",
};

interface UserType {
  username: string;
  token: string;
};

interface ErrorType {
  error: string;
}

export const userReducer = (state: UserType = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.LOGIN:
          return {
            ...state,
            username: action.payload.username,
            token: action.payload.token,
          };
          case ActionTypes.LOGOUT:
            return { ...initialState, error: "" };
        default:
          return state;
      }
}

export const errorReducer = (state: ErrorType = { error: ""}, action: Action) => {
  switch (action.type) {
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
      case ActionTypes.RESET_ERROR:
        return { ...state, error: "" };
    default:
      return state;
  }
}
