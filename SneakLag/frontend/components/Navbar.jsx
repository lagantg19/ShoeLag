/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Speech from "../pages/Speech";

const Navbar = () => {
  const { user, getUser } = useContext(AuthContext);
  const Navigate = useNavigate();

  //handling logout
  const handleLogout = () => {
    getUser({});
    alert("logged out successfully");
    Navigate("/");
  };
  const handleSell = () => {
    Navigate("/sell");
  };

  //save
  const handleLiked = () => {
    Navigate("/like");
  };

  const handleGame = () => {
    Navigate("/inventory");
  };
  const handleCart = () => {
    Navigate("/cart");
  };
  const handleChatbot = () => {
    Navigate("/trailer");
  };
  const handleChat = () => {
    Navigate("/chatauth");
  };
  const handleStock = () => {
    Navigate("/stock");
  };
  const handleDashboard = () => {
    Navigate("/dashboard");
  };

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col">
          <nav className=" title navbar navbar-expand-lg navbar-light bg-light">
            <a className="  navbar-brand" href="/">
              <h2>
                <strong>ShoeLag</strong>
              </h2>
            </a>

            {user.email && !user.admin && (
              <>
                <div className="col-3 ">
                  <div className="col d-flex justify-content-end me-2">
                    <Speech />
                  </div>
                </div>
                <div className="col-0 d-flex justify-content-start me-2">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleChat}
                    disabled={!user.email}
                  >
                    CHAT
                  </button>
                </div>
                <div className="col d-flex justify-content-start">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handleChatbot}
                    disabled={!user.email}
                  >
                    CHATBOT
                  </button>
                </div>
              </>
            )}

            <div
              className="collapse navbar-collapse d-flex justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav ">
                <li className="nav-item active">
                  {user.admin ? (
                    <a className="nav-link" href="/approval">
                      <h4 className="fw-bold">Home</h4>

                      <span className="sr-only"></span>
                    </a>
                  ) : (
                    <a className="nav-link" href="/explore">
                      <h4 className="fw-bold">Home</h4>

                      <span className="sr-only"></span>
                    </a>
                  )}
                </li>
                {!user.email && (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">
                        <h4 className="fw-bold">Login</h4>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/signup">
                        <h4 className="fw-bold">Signup</h4>
                      </a>
                    </li>
                  </>
                )}
                {user.email && (
                  <li className="nav-item">
                    <button className="nav-link" onClick={handleLogout}>
                      <h4 className="fw-bold">Logout</h4>
                    </button>
                  </li>
                )}

                {user.email && !user.admin && (
                  <li className="d-flex justify-content-stretch">
                    <div className="btn-group  ">
                      <button
                        type="button"
                        className="btn dropdown-toggle "
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        🏀
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li className="">
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={handleSell}
                          >
                            <strong>SELL</strong>
                          </button>
                          <hr />
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={handleGame}
                          >
                            <strong>YOUR GAME</strong>
                          </button>
                          <hr />
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={handleCart}
                          >
                            <strong>CART</strong>
                          </button>
                        </li>
                        <hr />
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={handleLiked}
                          >
                            <strong>LIKED</strong>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}

                {user.email && user.admin && (
                  <li className="d-flex justify-content-stretch">
                    <div className="btn-group  ">
                      <button
                        type="button"
                        className="btn dropdown-toggle "
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        🎯
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li className="">
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={handleDashboard}
                          >
                            <strong>DASHBOARD</strong>
                          </button>
                          <hr />
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={handleStock}
                          >
                            <strong>STOCK</strong>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
