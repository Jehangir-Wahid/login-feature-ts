import React, { useState } from "react";
import axios from "axios";
import Logo from "../../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux";
import { login, resetError, setError } from "../../redux/action-creators";
import { useNavigate } from "react-router";

const initialState = {
  username: "",
  password: "",
  isLoading: false,
};

export default () => {
  const [username, setUsername] = useState(initialState.username);
  const [password, setPassword] = useState(initialState.password);
  const [isLoading, setIsLoading] = useState(initialState.isLoading);

  const stateError = useSelector((state: State) => state.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    axios
      .post("https://reqres.in/api/login", {
        username,
        password,
      })
      .then(async (response) => {
        const { token } = response.data;
        await dispatch(login(username, token));
        setIsLoading(false);
        dispatch(resetError());
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch(setError(error.response.data.error));
        setIsLoading(false);
      });
  };

  return (
    <>
      <section className="login">
        <div className="container vh-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-4">
              <div className="text-center">
                <Logo width={110} height={25} />
                <p className="mt-5 mb-3">Please login to dashboard</p>
              </div>

              <div className="row">
                <div className="col col-md-12">
                  {stateError.error ? (
                    <div className="alert alert-danger" role="alert">
                      {stateError.error}
                    </div>
                  ) : null}
                </div>
              </div>

              <form data-testid="login-form" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    id="username"
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    placeholder="name@example.com"
                    required={true}
                    onChange={(event) => {
                      setUsername(event.target.value);
                    }}
                  />
                  <label htmlFor="username">Username</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    id="password"
                    autoComplete="off"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required={true}
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                  <label htmlFor="password">Password</label>
                </div>

                <div>
                  <input
                    type="submit"
                    className="btn btn-primary mb-3 me-3"
                    value="Login"
                  />
                  {isLoading ? (
                    <div className="spinner-border text-warning" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
