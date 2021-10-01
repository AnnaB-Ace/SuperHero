import { SET_TEAM, ACUM_POWERSTART } from "../types";

const setTeam = (data) => ({
  type: SET_TEAM,
  payload: data,
});

const acumPowerstart = (data) => ({
  type: ACUM_POWERSTART,
  payload: data,
});

const checkId = (id, teamHero) => {
  const Check = teamHero.find((item) => item.id === id);
  return Check;
};

const countBadFn = (team) => {
  let count = 0;
  team.forEach((item) => {
    const {
      biography: { alignment },
    } = item;
    if (alignment === "bad") count = count + 1;
  });
  return count;
};

const countGoodFn = (team) => {
  let count = 0;
  team.forEach((item) => {
    const {
      biography: { alignment },
    } = item;
    if (alignment === "good") count = count + 1;
  });
  return count;
};

export const teamAction = (item) => {
  return (dispatch, getState) => {
    console.log("item", item);
    const {
      biography: { alignment },
    } = item;

    const state = getState();
    const team = state.team.teamHero;
    const countBad = countBadFn(team);
    const countGood = countGoodFn(team);
    console.log("countBad", countBad);
    console.log("countGood", countGood);

    if (team.length === 6) return;

    if (countGood >= 3 && alignment === "good") return;

    if (countBad >= 3 && alignment === "bad") return;

    const exist = checkId(item.id, team);
    if (exist) return;

    const newTeam = [...team, item];
    dispatch(setTeam(newTeam));
    localStorage.setItem("newTeam", JSON.stringify(newTeam));
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

export const acumPowerstartAction = (teamHero) => {
  return (dispatch, getState) => {
    const state = getState();
    const team = state.team.teamHero;
  };
};

// ver que en agregar el id del item no se encuentre incluido en teamhero
// revisar la action de eliminar que se daño con los cambios hechos
//puede ser porque son repetidos, solucionar item 2
