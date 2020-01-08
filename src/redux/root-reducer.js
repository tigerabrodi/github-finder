import { combineReducers } from "redux";
import githubReducer from "./github/github.reducer";



const rootReducer = combineReducers({
    githubReducer: githubReducer
});

export default rootReducer;