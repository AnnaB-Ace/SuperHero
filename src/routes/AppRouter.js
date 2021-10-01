import React from "react";
const HomeComponent = React.lazy(() => import("../pages/home/Home"));
const SearchComponent = React.lazy(() => import("../pages/search/SearchHero"));
const DetailComponent = React.lazy(() =>
  import("../pages/DetailItem/Detailitem")
);

const mainRoutes = [
  { component: HomeComponent, name: "Home", path: "/home", exact: false },
  { component: SearchComponent, name: "Search", path: "/search", exact: true },
  {
    component: DetailComponent,
    name: "Detail",
    path: "/search/:id",
    exact: true,
  },
];
export default mainRoutes;
