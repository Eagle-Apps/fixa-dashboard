import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
// import {FixaLogo} from '../components/custom-icon'

function SideNav(props) {
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <RouterNavLink to="/dashboard" className="app-brand-link">
          <span className="app-brand-logo demo">{/* <FixaLogo /> */}</span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            Fixa
          </span>
        </RouterNavLink>
        <a
          href="false"
          className=" menu-link text-large ms-auto d-block d-xl-none"
          onClick={(e) => props.toggleCollapse(e)}
        >
          <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>
      </div>
      <ul className="menu-inner py-1">
        {/* Dashboard */}

        <li className="menu-item active">
          <RouterNavLink to="/dashboard" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div data-i18n="Analytics">Dashboard</div>
          </RouterNavLink>
        </li>
        <li className="menu-item ">
          <RouterNavLink to="cv-upload" className="menu-link">
            <i className="menu-icon tf-icons bx bx-file" />
            <div data-i18n="Analytics">Profile</div>
          </RouterNavLink>
        </li>
        <li className="menu-item ">
          <RouterNavLink to={`request-history`} className="menu-link">
            <i className="menu-icon tf-icons bx bx-user" />
            <div data-i18n="Analytics">Request History</div>
          </RouterNavLink>
        </li>
        <li className="menu-item ">
          <RouterNavLink to="service-invoice" className="menu-link">
            <i className="menu-icon tf-icons bx bx-file" />
            <div data-i18n="Analytics">Service Invoice</div>
          </RouterNavLink>
        </li>
        <li className="menu-item ">
          <RouterNavLink to="service-plans" className="menu-link">
            <i className="menu-icon tf-icons bx bx-file" />
            <div data-i18n="Analytics">Service Plans</div>
          </RouterNavLink>
        </li>
        {/* Layouts */}
        {/* <li className="menu-item">
          <a href="/dashboard" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-calendar-event" />
            <div data-i18n="Layouts">Service Plan</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <RouterNavLink to="reunion" className="menu-link">
                <div data-i18n="Without menu">Profile</div>
              </RouterNavLink>
            </li>
          </ul>
        </li> */}
      </ul>
    </aside>
  );
}

export default SideNav;
