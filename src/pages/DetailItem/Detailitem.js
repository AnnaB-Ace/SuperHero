import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckAuth from "../../components/checkAuth/CheckAuth";
import "./Detailitem.css";
import { useHistory, useParams } from "react-router";

const Detailitem = () => {
  const history = useHistory();
  const [heroId, setHeroId] = useState([]);
  const { id } = useParams();
  const state = useSelector((state) => state.team);
  const { teamHero } = state;

  useEffect(() => {
    if (teamHero.length > 0) {
      const hero = teamHero.find((item) => item.id === id);
      setHeroId(hero);
    }
  }, []);

  const { image, name, work } = heroId;
  // const { base } = work;
  // const { height } = appearance;
  // console.log(base);

  const handleClick = () => history.goBack();

  return (
    <>
      <CheckAuth>
        <div className="container-fluid">
          <div className="row detailitem-container">
            <div className="col-lg-6 col-xs-12 detailitem-container-image">
              {heroId.image !== undefined && (
                <img
                  src={image.url}
                  className="item-image img-fluid"
                  alt={name}
                />
              )}
              {/* <img src={url} className="item-image img-fluid" alt={name} /> */}
            </div>
            <div className="col-lg-6 col-xs-12 detailitem-container-info">
              <div className="d">
                <h1>{name}</h1>
                {/* {heroId.work !== undefined && <p>{work}</p>} */}

                <p>
                  Heigth:
                  {/* {height.map((h, index) => (
                      <p key={index}>{h}</p>
                    ))} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CheckAuth>
      <button className="btn btn-primary" onClick={handleClick}>
        Volver
      </button>
    </>
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
