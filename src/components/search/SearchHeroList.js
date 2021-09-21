import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchHeroList = ({ heroList }) => {
  const {
    name,
    image: { url },
  } = heroList;

  return (
    <div className="card mt-4 ms-5 mb-4" style={{ maxWidth: 540 }}>
      <img src={url} className="" alt={name} />
      <div className="card-fluid">
        <h5 className="card-title">{name}</h5>
        <h5 className="card-title">{name}</h5>
        <h5 className="card-title">{name}</h5>
        <FontAwesomeIcon size="2x" color="#808080" icon={faTimes} />
        <FontAwesomeIcon size="2x" color="#808080" icon={faPlusCircle} />
      </div>
    </div>
  );
};

export default SearchHeroList;
