import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = ({ title = "SuperHero", handleLogout }) => {
  return (
    <div className="row">
      <div className="col-lg-12 col-xs-12 header">
        {title && <span className="header__title">{title}</span>}
        <div className="header__user">
          <div>challenge@alkemy.org</div>
          <div onClick={handleLogout}>
            <FontAwesomeIcon size="2x" color="white" icon={faSignOutAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
<i class="fa-solid fa-right-from-bracket"></i>;
