import { SET_TEAM, REMOVE_TEAM_LOCAL_STORAGE, ERROR_TEAM } from "../types/team";

const data = localStorage.getItem("newTeam");
const teamHero = data ? JSON.parse(data) : [];
const initialState = {
  teamHero: teamHero,
  error: null,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM:
      return {
        ...state,
        teamHero: action.payload,
      };
    case ERROR_TEAM:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_TEAM_LOCAL_STORAGE:
      return {
        ...state,
        teamHero: [],
      };

    default:
      return state;
  }
};

export default teamReducer;
