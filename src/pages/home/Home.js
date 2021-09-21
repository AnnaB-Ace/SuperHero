import React from "react";
import { useHistory } from "react-router";
import { Header } from "../../components/header/Header";
import Search from "../../components/search/Search";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <Search {...{ history }} />
    </div>
  );
};

export default Home;
