import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  //in place of props i use {title}
  let headerStyle = {
    position: "sticky",
    padding: "10px 10px 0px 10px",
    top: "0",
    width: " 100%",
    /* Height of the footer*/
    // height: "40px",
    background: "grey",
  };
  return (
    <>
      <header headerstyle={headerStyle}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="#">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="#">
                    dropdown1
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">
                    dropdown2
                  </Link>
                  <Link className="dropdown-item" to="#">
                    dropdown3
                  </Link>
                </div>
              </li>
            </ul>
            {props.searchBar ? (
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            ) : (
              "serachBar is false"
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
Header.defaultProps = {
  title: " Default Here!",
  searchBar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired, //isrequired only work when searchbar is nowhere defined
};
