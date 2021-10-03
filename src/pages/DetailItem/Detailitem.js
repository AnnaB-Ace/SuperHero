import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CheckAuth from "../../components/checkAuth/CheckAuth";
import "./Detailitem.css";
import { useHistory } from "react-router";

const Detailitem = () => {
  const history = useHistory();
  // const { id } = useParams();
  const searchID = useSelector((state) => state.search);
  const { getHeroId } = searchID;
  const { success, data } = getHeroId;
  const handleClick = () => history.push("/home");
  useEffect(() => {
    localStorage.setItem("dataId", JSON.stringify(data));
  }, [data]);

  return (
    <>
      <CheckAuth>
        <div className="container-fluid">
          <div className="row detailitem-container">
            <div className="col-lg-6 col-xs-12 detailitem-container-image">
              {success === true && (
                <img
                  src={data.image.url}
                  className="item-image img-fluid"
                  alt={data.name}
                />
              )}
            </div>
            <div className="col-lg-6 col-xs-12 detailitem-container-info">
              <div className="d">
                <h1>{data.name}</h1>
                {success === true && <p>Work: {data.work.base}</p>}
                <div className="alias">
                  Aliases:
                  {success === true &&
                    data.biography.aliases.map((alias, index) => (
                      <span key={index}>{alias}</span>
                    ))}
                </div>
                <div className="alias">
                  Height:
                  {success === true &&
                    data.appearance.height.map((h, index) => (
                      <p key={index}> {h}</p>
                    ))}
                </div>
                <div className="alias">
                  Weight:
                  {success === true &&
                    data.appearance.weight.map((h, index) => (
                      <p key={index}> {h}</p>
                    ))}
                </div>
              </div>

              <button className="btn btn-primary" onClick={handleClick}>
                Volver
              </button>
            </div>
          </div>
        </div>
      </CheckAuth>
    </>
  );
};

export default Detailitem;
