import { SET_TEAM, ACUM_POWERSTART } from "../types/team";

// manejo del car de heroes
const initialState = {
  teamHero: [],
  acumPowerstart: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM:
      return {
        ...state,
        teamHero: action.payload,
      };
    case ACUM_POWERSTART:
      return {
        ...state,
        acumPowerstart: action.payload,
      };
    default:
      return state;
  }
};

export default teamReducer;
