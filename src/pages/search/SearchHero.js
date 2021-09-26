import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import SearchHeroList from "../../components/search/SearchHeroList";
import { teamAction } from "../../store/actions/team";
import "./SearchHero.css";

const SearchHero = () => {
  const state = useSelector((state) => state.search);
  const {
    getHeroName: { data },
  } = state;

  const dispatch = useDispatch();
  const history = useHistory();

  const addToTeam = (id) => {
    const hero = data.find((heroId) => heroId.id === id);
    dispatch(teamAction(hero));
    history.push("/home");
  };

  // const handleButton = () => {
  //   history.goBack();
  // };
  // const DeleteFromTeam = () => {};
  // const ClearTeam = () => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-xs-12 list">
          <h1 className="my-5">Select a Superhero</h1>
          <div className="list-container my-5">
            {data.map((hero) => {
              return <SearchHeroList key={hero.id} {...{ hero, addToTeam }} />;
            })}
          </div>
          {/* {data && (
            <div onClick={handleButton} className="btn btn-primary">
              volver
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
