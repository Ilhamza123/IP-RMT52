import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonLogOut from "./ButtonLogOut";



function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    setIsLoggedIn(!!accessToken);
  }, []);

  if (!isLoggedIn) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/src/assets/pages/assets/taekwondo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Taekwondo icon"
              loading="lazy"
            />
            DojangPedia
            <img
              src="/src/assets/pages/assets/taekwondo1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Taekwondo icon"
              loading="lazy"
            />
          </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="/src/assets/pages/assets/taekwondo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Taekwondo icon"
              loading="lazy"
            />
            DojangPedia
            <img
              src="/src/assets/pages/assets/taekwondo1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Taekwondo icon"
              loading="lazy"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/homepage">
                  Beranda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/history">
                  Sejarah
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/basic">
                  Teknik Dasar
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sabuk
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/belt">
                      Sabuk
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/addFormSabuk">
                      Tambah Sabuk
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TopRanking">
                  TopRank
                </Link>
              </li>
            </ul>
            <div className="ms-auto">
              <ButtonLogOut />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
