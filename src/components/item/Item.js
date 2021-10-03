import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAction } from "../../store/actions/team";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getSearchIDAction } from "../../store/actions/search";

const Item = ({ item, history }) => {
  const dispatch = useDispatch();
  const {
    name,
    id,
    image: { url },
    powerstats: { intelligence, strength, speed, power, combat, durability },
  } = item;

  const handleDelete = (ItemId) => dispatch(removeAction(ItemId));

  useEffect(() => {}, []);
  const goToDetail = () => {
    dispatch(getSearchIDAction(id));
    history.push(`/search/${id}`);
  };

  return (
    <div className="item-card" style={{ maxWidth: 250 }}>
      <img src={url} className="item-image img-fluid" alt={name} />
      <div className="item-cardList">
        <div className="item-description">
          <span>Combat </span>
          <span>{combat}</span>
        </div>
        <div className="item-description">
          <span>Speed </span>
          <span>{speed}</span>
        </div>
        <div className="item-description">
          <span>Strength </span>
          <span>{strength}</span>
        </div>
      </div>
      <div className="item-cardList">
        <div className="item-description">
          <span>Intelligence </span>
          <span>{intelligence}</span>
        </div>
        <div className="item-description">
          <span>Durability </span>
          <span>{durability}</span>
        </div>
        <div className="item-description">
          <span>Power </span>
          <span>{power}</span>
        </div>

        {/* <div onClick={() => addToTeam(id, data)} className="card-button">
          <FontAwesomeIcon size="2x" color="#808080" icon={faPlusCircle} />
        </div> */}
      </div>

      <div className="heroItem-button">
        <button className="item-button" onClick={goToDetail}>
          Ver detalle
        </button>
        <span onClick={() => handleDelete(id)}>
          <FontAwesomeIcon size="2x" color="#808080" icon={faTrash} />
        </span>
      </div>
    </div>
  );
};

export default Item;
