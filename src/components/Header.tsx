import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/action-creators";
import Logo from "./Logo";

interface UserType {
  username: string;
  token: string;
}

export default () => {
  const user: UserType = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  return (
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        <Logo width={110} height={25} color="white" />
      </a>
      <button
        className="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <input
        className="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <Link
            to="/"
            className="nav-link px-3"
            onClick={() => dispatch(logout())}
          >
            Sign out
          </Link>
        </div>
      </div>
    </header>
  );
};
