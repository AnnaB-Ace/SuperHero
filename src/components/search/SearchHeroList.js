import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const SearchHeroList = ({ hero, addToTeam }) => {
  const state = useSelector((state) => state.search);
  const {
    getHeroName: { data },
  } = state;

  const {
    name,
    id,
    image: { url },
  } = hero;

  return (
    <div className="card mt-4 ms-5 mb-4" style={{ maxWidth: 540 }}>
      <img src={url} className="" alt={name} />
      <div className="card-fluid">
        <h5 className="card-title">{name}</h5>
        <h5 className="card-title">{id}</h5>
        <div onClick={() => addToTeam(id)} className="card-button">
          <FontAwesomeIcon size="2x" color="#808080" icon={faPlusCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchHeroList;
