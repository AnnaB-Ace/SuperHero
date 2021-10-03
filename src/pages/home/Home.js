import React from "react";
import { useHistory } from "react-router";
import { Header } from "../../components/header/Header";
import Search from "../../components/search/Search";
import CheckAuth from "../../components/checkAuth/CheckAuth";
import ItemList from "../../components/item/ItemList";
import CardPowerstats from "../../components/card-powerstats/CardPowerstats";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state.team);
  const { teamHero } = state;
  const history = useHistory();
  return (
    <CheckAuth>
      <Header history={history} />
      <Search {...{ history }} />
      {teamHero.length !== 0 && <CardPowerstats />}
      <ItemList {...{ history }} />
    </CheckAuth>
  );
};

export default Home;
