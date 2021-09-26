import authReducer from "./auth";
import searchReducer from "./search";
import teamReducer from "./team";

const reducers = {
  auth: authReducer,
  search: searchReducer,
  team: teamReducer,
};

export default reducers;
