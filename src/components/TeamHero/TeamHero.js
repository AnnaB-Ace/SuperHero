import React from "react";
import { useSelector } from "react-redux";
import HeroItem from "./HeroItem";
import "./TeamHero.css";

const TeamHero = ({ history }) => {
  const state = useSelector((state) => state.team);
  const { teamHero } = state;

  return (
    <div className="col-lg-12 col-xs-12 list-team ">
      <div className="list-container my-5">
        {teamHero.map((item, index) => (
          <HeroItem key={index} item={item} {...{ history }} />
        ))}
      </div>
    </div>
  );
};

export default TeamHero;
