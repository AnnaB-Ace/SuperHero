import { ADD_TO_TEAM, REMOVE_ONE_TEAM, SET_TEAM } from "../types/team";

// manejo del car de heroes
const initialState = {
  teamHero: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEAM:
      return {
        ...state,
        teamHero: action.payload,
      };
    // case ADD_TO_TEAM:
    //   return {
    //     ...state,
    //     teamHero: [...state.teamHero, action.payload],
    //   };
    // case REMOVE_ONE_TEAM:
    //   console.log(action.payload);
    //   ;
    //   return { ...state, teamHero: array };
    default:
      return state;
  }
};

export default teamReducer;
