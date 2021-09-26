import React from "react";
import { useHistory } from "react-router";
import { Header } from "../../components/header/Header";
import Search from "../../components/search/Search";
import TeamHero from "../../components/TeamHero/TeamHero";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <Header history={history} />
      <Search {...{ history }} />
      <TeamHero {...{ history }} />
    </>
  );
};

export default Home;
