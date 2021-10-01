import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import CheckAuth from "../../components/checkAuth/CheckAuth";
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

  const addToTeam = (hero) => {
    dispatch(teamAction(hero));
    history.push("/home");
  };

  return (
    <CheckAuth>
      <div className="row">
        <div className="col-lg-12 col-xs-12 searchHero">
          <h1 className="my-5">SELECT A SUPERHERO</h1>
          <div className="searchHero-container">
            {data.map((hero) => {
              return <SearchHeroList key={hero.id} {...{ hero, addToTeam }} />;
            })}
          </div>
        </div>
      </div>
    </CheckAuth>
  );
};

export default SearchHero;
