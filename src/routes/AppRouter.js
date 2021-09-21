import React from "react";

const LoginComponent = React.lazy(() => import("../pages/login/Login"));

const HomeComponent = React.lazy(() => import("../pages/home/Home"));
const SearchComponent = React.lazy(() => import("../pages/search/SearchHero"));

const mainRoutes = [
  { component: LoginComponent, name: "Login", path: "/login", exact: true },
  { component: HomeComponent, name: "Home", path: "/home", exact: false },
  { component: SearchComponent, name: "Home", path: "/search", exact: false },
];
export default mainRoutes;
