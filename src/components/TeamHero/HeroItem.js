import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAction } from "../../store/actions/team";
import "./TeamHero.css";

const HeroItem = ({ item, history }) => {
  const {
    name,
    id,
    image: { url },
    powerstats: { intelligence, strength, speed, power, combat, durability },
  } = item;

  const state = useSelector((state) => state.team);
  const { teamHero } = state;
  console.log(teamHero);
  const dispatch = useDispatch();

  const handleDelete = (ItemId) => dispatch(removeAction(ItemId));

  const goToDetail = () => history.push(`/search/${id}`);

  return (
    <div className="card card-item mt-4 ms-5 mb-4" style={{ maxWidth: 540 }}>
      <img src={url} className="image-hero" alt={name} />
      <div className="card-fluid">
        <div className="card-fluid-num">
          <span>Combat</span>
          <span>{combat}</span>
        </div>
        <div className="card-fluid-num">
          <span>Speed</span>
          <span>{speed}</span>
        </div>
        <div className="card-fluid-num">
          <span>Power</span>
          <span>{power}</span>
        </div>
        <div className="card-fluid-num">
          <span>Strength</span>
          <span>{strength}</span>
        </div>
        <div className="card-fluid-num">
          <span>Intelligence</span>
          <span>{intelligence}</span>
        </div>
        <div className="card-fluid-num">
          <span>Durability</span>
          <span>{durability}</span>
        </div>
        {/* <div onClick={() => addToTeam(id, data)} className="card-button">
          <FontAwesomeIcon size="2x" color="#808080" icon={faPlusCircle} />
        </div> */}
      </div>
      <span onClick={goToDetail}>ver detalle</span>
      <span onClick={() => handleDelete(id)}>Eliminar</span>
    </div>
  );
};

export default HeroItem;
