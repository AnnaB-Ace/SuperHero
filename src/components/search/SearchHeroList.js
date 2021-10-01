import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const SearchHeroList = ({ hero, addToTeam }) => {
  const {
    name,
    image: { url },
  } = hero;

  return (
    <div className="searchHero-card">
      <img src={url} className="searchHero-image img-fluid" alt={name} />
      <div onClick={() => addToTeam(hero)} className="searchHero-cardList">
        <FontAwesomeIcon
          size="3x"
          color="#808080"
          className="card-icon"
          icon={faPlusCircle}
        />
        <div className="card-title">{name}</div>
      </div>
    </div>
  );
};

export default SearchHeroList;
