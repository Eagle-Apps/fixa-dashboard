import React from "react";
import { NavLink, NavLink as RouterNavLink } from "react-router-dom";
import { MyNavLink } from "../components/custom.styles";
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

        <MyNavLink
          to="/dashboard"
          className="menu-item"
          activeClassName="active"
        >
          <div className="flex">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div data-i18n="Analytics">Dashboard</div>
          </div>
        </MyNavLink>
        <MyNavLink
          to={`my-account`}
          className="menu-item"
          activeClassName="active"
        >
          <div className="flex">
            <i className="menu-icon tf-icons bx bx-file" />
            <div data-i18n="Analytics">Profile</div>
          </div>
        </MyNavLink>

        <MyNavLink
          to={`request-history`}
          className="menu-item"
          activeClassName="active"
        >
          <div className="flex">
            <i className="menu-icon tf-icons bx bx-user" />
            <div data-i18n="Analytics">Request History</div>
          </div>
        </MyNavLink>
        <MyNavLink to="service-invoice" className="menu-item">
          <div className="flex">
            <i className="menu-icon tf-icons bx bx-file" />
            <div data-i18n="Analytics">Service Invoice</div>
          </div>
        </MyNavLink>
        <MyNavLink
          to="service-plans"
          className="menu-item"
          activeClassName="active"
        >
          <div className="flex">
            <i className="menu-icon tf-icons bx bx-file" />
            <div data-i18n="Analytics">Subscriptions</div>
          </div>
        </MyNavLink>
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
