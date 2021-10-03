import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./Item.css";

const ItemList = ({ history }) => {
  const state = useSelector((state) => state.team);
  const { teamHero, error } = state;

  return (
    <div className="row ">
      <div className="col-lg-12 col-xs-12 item-list ">
        <span className="item-list-error">{error} </span>
        <div className="item-container">
          {teamHero.map((item, index) => (
            <Item key={index} item={item} {...{ history }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
