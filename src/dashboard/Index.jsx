import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";
import { Outlet } from "react-router";
import init from "./init";
import { useDispatch } from "react-redux";
import { getProfile } from "../store/actions/userProfileActions";

function Index(props) {
  const dispatch = useDispatch();
  const userid = sessionStorage.getItem("fixa::token")
    ? JSON.parse(sessionStorage.getItem("fixa::token"))
    : null;
  React.useEffect(() => {
    init();
  }, []);
  const toggleCollapse = (e) => {
    e.preventDefault();
    window.Helpers.toggleCollapsed(true);
  };

  React.useEffect(() => {
    if (userid) dispatch(getProfile(userid?.id));
  }, [dispatch, userid]);
  return (
    <div className="layout-wrapper layout-content-navbar ">
      <div className="layout-container">
        <SideNav toggleCollapse={toggleCollapse} />
        <div className="layout-page">
          <Header toggleCollapse={toggleCollapse} />
          <div className="content-wrapper">
            {/* <!-- our Content here--> */}
            <div className="container-xxl flex-grow-1 container-p-y">
              {props.children}
              <Outlet />
            </div>
          </div>
          <div className="content-backdrop fade"></div>
        </div>
      </div>
      <div className="layout-overlay" onClick={(e) => toggleCollapse(e)}></div>
    </div>
  );
}

export default Index;
