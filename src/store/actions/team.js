import { SET_TEAM } from "../types";

const setTeam = (data) => ({
  type: SET_TEAM,
  payload: data,
});

export const teamAction = (item) => {
  return (dispatch, getState) => {
    const state = getState();
    console.log(item);
    const {
      biography: { alignment },
    } = item;
    console.log(alignment);
    if (alignment === "good") {
      const team = state.team.teamHero;
      const newTeam = [...team, item];
      console.log(newTeam.length);
      dispatch(setTeam(newTeam));
    }
    // const {
    //   search: {
    //     getHeroName: { data },
    //   },
    // } = state;
    // const { id } = item;
    // console.log(id);
    // if (id.includes(state.team.teamHero.id)) {
    //   console.log("ya existe ese ID en el carro de compras");
    // }
  };
};

export const removeAction = (id) => {
  return (dispatch, getState) => {
    const state = getState();
    const team = state.team.teamHero;
    const newTeam = team.filter((item) => item.id !== id);
    dispatch(setTeam(newTeam));
  };
};
