import React from "react";
import { useHistory } from "react-router";
import { Header } from "../../components/header/Header";
import Search from "../../components/search/Search";
import CheckAuth from "../../components/checkAuth/CheckAuth";
import ItemList from "../../components/item/ItemList";
import CardPowerstats from "../../components/card-powerstats/CardPowerstats";

const Home = () => {
  const history = useHistory();
  return (
    <CheckAuth>
      <Header history={history} />
      <Search {...{ history }} />
      <CardPowerstats />
      <ItemList {...{ history }} />
    </CheckAuth>
  );
};

export default Home;
