import React from "react";

const LoginComponent = React.lazy(() => import("../pages/login/Login"));

const HomeComponent = React.lazy(() => import("../pages/home/Home"));
const SearchComponent = React.lazy(() => import("../pages/search/SearchHero"));
const DetailComponent = React.lazy(() =>
  import("../pages/DetailItem/Detailitem")
);

const mainRoutes = [
  { component: LoginComponent, name: "Login", path: "/login", exact: true },
  { component: HomeComponent, name: "Home", path: "/home", exact: false },
  { component: SearchComponent, name: "Search", path: "/search", exact: false },
  {
    component: DetailComponent,
    name: "Detail",
    path: "/search/:id",
    exact: true,
  },
];
export default mainRoutes;
