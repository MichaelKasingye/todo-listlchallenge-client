import { combineReducers } from "redux";

// import SearchTermSReducer from "./SearchTerm/searchTermSlice";
import ClientInterestReducer from "./ClientInterest/ClientInterestSlice";
// import projectsReducer from "./projects/projectSlice";
// import imageReducer from "./images/imageSlice";
// import enrollmentReducer from "./enrollment/enrollmentSlice";

const rootReducer = combineReducers({
//   SearchTerm: SearchTermSReducer,
ClientInterest: ClientInterestReducer,
  //   projects: projectsReducer,
  //   imageUrl: imageReducer,
  //   enrollment: enrollmentReducer,
});

export default rootReducer;
