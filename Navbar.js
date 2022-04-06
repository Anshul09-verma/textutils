import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.changeMode} bg-${props.changeMode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.logo}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  About
                </a>
              </li> */}
            </ul>
            <div class="form-check form-switch my-1">
              <input
                class="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label class={`form-check-label text-${props.changeMode==="light"?"dark":'light'}`} for="flexSwitchCheckDefault">
                Enabled Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
