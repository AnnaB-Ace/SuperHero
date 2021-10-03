import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./CardPowerstats.css";

const CardPowerstats = () => {
  const state = useSelector((state) => state.team);

  const { teamHero } = state;

  let AcumInteligence = 0;
  let AcumDurability = 0;
  let AcumCombat = 0;
  let AcumPower = 0;
  let AcumSpeed = 0;
  let AcumStrength = 0;
  const AcumPowerStats = (teamHero) => {
    teamHero.map((item) => {
      return (
        (AcumInteligence += Number(item.powerstats.intelligence)),
        (AcumDurability += Number(item.powerstats.durability)),
        (AcumCombat += Number(item.powerstats.combat)),
        (AcumPower += Number(item.powerstats.power)),
        (AcumSpeed += Number(item.powerstats.speed)),
        (AcumStrength += Number(item.powerstats.strength))
      );
    });
    return [
      AcumInteligence,
      AcumDurability,
      AcumCombat,
      AcumPower,
      AcumSpeed,
      AcumStrength,
    ];
  };

  [
    AcumInteligence,
    AcumDurability,
    AcumCombat,
    AcumPower,
    AcumSpeed,
    AcumStrength,
  ] = AcumPowerStats(teamHero);

  return (
    <div className="row ">
      <div className="col-lg-12 col-xs-12 powerstats ">
        <div className="powerstats-card" style={{ maxWidth: 250 }}>
          <p>Intelligence:{AcumInteligence}</p>
          <p>Power: {AcumPower}</p>
          <p>Speed:{AcumSpeed}</p>
          <p>Strength: {AcumStrength}</p>
          <p>Combat: {AcumCombat}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPowerstats;
