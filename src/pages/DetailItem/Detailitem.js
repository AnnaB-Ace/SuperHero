import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckAuth from "../../components/checkAuth/CheckAuth";
import "./Detailitem.css";
import { useParams } from "react-router";

const Detailitem = () => {
  const [heroId, setHeroId] = useState([]);
  const { id } = useParams();
  const state = useSelector((state) => state.team);
  const { teamHero } = state;
  // useEffect(() => {
  //   const hero = teamHero.find((item) => item.id === id);
  //   setHeroId(hero);
  // }, []);
  // const {
  //   image: { url },
  //   name,
  // } = heroId;

  return (
    <CheckAuth>
      <div className="container-fluid">
        <div className="row detailitem-container">
          <div className="col-lg-6 col-xs-12 detailitem-container-image">
            {/* <img src={url} className="item-image img-fluid" alt={name} /> */}
          </div>
          <div className="col-lg-6 col-xs-12 detailitem-container-info">
            <div className="d">
              <h1>iouyvtcx</h1>
            </div>
          </div>
        </div>
      </div>
    </CheckAuth>
  );
};

export default Detailitem;

// mostrar:, altura, nombre completo, alias, color de ojos y cabello, y su lugar de trabajo.
// ● Peso.
// ● Altura.
// ● Nombre.
// ● Alias.
// ● Color de ojos.
// ● Color de cabello.
// ● Lugar de trabajo.

// ● Weight.
// ● Height.
// ● Name.
// ● Aliases.
// ● Eye color.
// ● Hair color.
// ● Workplace.
