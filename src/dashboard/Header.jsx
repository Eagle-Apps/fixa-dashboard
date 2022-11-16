import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/authActions";
import { useDispatch } from "react-redux";

function Header(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className=" navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a
          className="nav-item nav-link px-0 me-xl-4"
          href="#t"
          onClick={(e) => props.toggleCollapse(e)}
        >
          <i className="bx bx-menu bx-sm" />
        </a>
      </div>
      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        {/* Search */}
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0" />
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>
        {/* /Search */}

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li className="nav-item lh-1 me-3">
            <a href="#hc">
              <i className="bx bxs-bell"></i>
            </a>
          </li>
          <Dropdown className="nav-item navbar-dropdown dropdown-user dropdown">
            <Dropdown.Toggle
              variant="transparent"
              id="dropdown-basic"
              className="nav-link dropdown-toggle hide-arrow transparent"
            >
              <div className="avatar avatar-online">
                <img
                  src={"../assets/img/avatars/avatar1.jpg"}
                  alt=".."
                  className="w-px-40 h-px-40 rounded-circle"
                />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
              <Dropdown.Item href="#/action-1">
                <div className="d-flex">
                  <div className="flex-shrink-0 me-3">
                    <div className="avatar avatar-online">
                      <img
                        src={"../assets/img/avatars/avatar1.jpg"}
                        alt=".."
                        className="w-px-40 w-px-40 rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <span className="fw-semibold d-block">John Doe</span>
                    <small className="text-muted">Client</small>
                  </div>
                </div>
              </Dropdown.Item>
              <div className="dropdown-divider" />
              <Dropdown.Item href="#">
                <Link to={`profile/`}>
                  {" "}
                  <i className="bx bx-user me-2" />
                  <span className="align-middle"> My Profile </span>{" "}
                </Link>
              </Dropdown.Item>
              <Dropdown.Item href="#" onClick={handleLogout}>
                {" "}
                <i className="bx bx-power-off me-2"></i>
                <span className="align-middle">Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* User */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
