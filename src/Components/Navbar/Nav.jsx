import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid m-3">
          <div className="ps-5 ms-5">
            {" "}
            <Link className="navbar-brand fs-2 text-uppercase text-light fw-bolder" to="/">
            Start Framework
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end me-5 pe-5" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link display-1 m-2 text-light fw-bolder width5" aria-current="page" to="/about">
                ABOUT
              </NavLink>
              <NavLink className="nav-link display-1 m-2 text-light fw-bolder width5" to="/portfolio">
                PORTFOLIO
              </NavLink>
              <NavLink className="nav-link display-1 m-2 text-light fw-bolder width5" to="/contact">
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
