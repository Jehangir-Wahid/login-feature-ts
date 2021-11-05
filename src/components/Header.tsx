import React from "react";

interface IProps {
  headerText: string;
}

const Header: React.FC<IProps> = ({ headerText, children }) => {
  return (
    <div className="container pt-2 bg-dark text-light rounded-bottom">
      <div className="row">
        <div className="col col-md-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <ul className="navbar-nav mb-2 col-md-12">
                <li className="nav-item col-md-10">
                  <h2>{headerText}</h2>
                </li>
                <li className="nav-item col-md-2">{children}</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
