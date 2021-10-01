import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../store/actions/auth";
import CheckAuth from "../checkAuth/CheckAuth";
import { useDispatch } from "react-redux";

const Header = ({ title = "SuperHero" }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
  };
  return (
    <CheckAuth>
      <div className="row">
        <div className="col-lg-12 col-xs-12 header">
          {title && <span className="header__title">{title}</span>}
          <div className="header__user">
            <div onClick={handleLogout}>
              <FontAwesomeIcon
                size="2x"
                color="white"
                icon={faSignOutAlt}
                className="header-logout"
              />
            </div>
          </div>
        </div>
      </div>
    </CheckAuth>
  );
};

export { Header };
