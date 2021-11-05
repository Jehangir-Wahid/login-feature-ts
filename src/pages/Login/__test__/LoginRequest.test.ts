import axios from "axios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

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
    return async () => {
      const response = await axios
        .post("https://reqres.in/api/login", {
          username: postData.username,
          password: postData.password,
        });
        return response;
    };
  };
  
  it("should fetch token from the server.", () => {
    const store = mockStore({});
  
    return store.dispatch(loginUser()).then((response) => {
      expect(response.status).toEqual(200);
    });
  });
  