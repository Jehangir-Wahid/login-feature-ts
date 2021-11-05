import axios from "axios";
import { Dispatch } from "redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  login,
  setError,
  resetError,
  logout,
} from "../../../redux/action-creators";
import { Action } from "../../../redux/actions";

beforeEach((): void => {
  jest.setTimeout(10000);
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const postData = {
  username: "eve.holt@reqres.in",
  password: "cityslicka",
  token: "",
};

// Test login Action
const loginUser = () => {
  return (dispatch: (arg0: (dispatch: Dispatch<Action>) => void) => void) => {
    return axios
      .post("https://reqres.in/api/login", {
        username: postData.username,
        password: postData.password,
      })
      .then((response) => {
        postData.token = response.data.token;
        dispatch(login(postData.username, postData.token));
      });
  };
};

it("should execute login user", () => {
  const store = mockStore({});

  return store.dispatch(loginUser()).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual("LOGIN");
  });
});

// Test logout Action
const logoutUser = () => {
  return async (
    dispatch: (arg0: (dispatch: Dispatch<Action>) => void) => any
  ) => {
    return await dispatch(logout());
  };
};

it("should execute logout user", () => {
  const store = mockStore({});

  return store.dispatch(logoutUser()).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual("LOGOUT");
  });
});

// Test set Error Action
const setStateError = () => {
  return async (
    dispatch: (arg0: (dispatch: Dispatch<Action>) => void) => any
  ) => {
    return await dispatch(setError("Some error."));
  };
};

it("should set the error property in state", () => {
  const store = mockStore({});

  return store.dispatch(setStateError()).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual("SET_ERROR");
  });
});

// Test reset Error Action
const resetStateError = () => {
  return async (
    dispatch: (arg0: (dispatch: Dispatch<Action>) => void) => any
  ) => {
    return await dispatch(resetError());
  };
};

it("should reset the error property in state", () => {
  const store = mockStore({});

  return store.dispatch(resetStateError()).then(() => {
    const actions = store.getActions();
    expect(actions[0].type).toEqual("RESET_ERROR");
  });
});
