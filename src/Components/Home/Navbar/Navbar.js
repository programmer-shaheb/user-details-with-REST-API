import React from "react";
import "../../../../node_modules/jquery/dist/jquery.min";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  MyChallenge
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul
                    className="navbar-nav ms-auto"
                    style={{ fontSize: "17px" }}
                  >
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="#">
                        Product
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Download
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
