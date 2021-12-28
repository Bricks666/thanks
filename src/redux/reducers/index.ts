import { combineReducers } from "redux";
import { Store } from "../../types/redux";
import loadingsReducer from "./loadingsReducer";
import loginReducer from "./loginReducer";
import navigationReducer from "./navigationReducer";
import postsReducer from "./postsReducer";
import profileReducer from "./profileReducer";
import registrationReducer from "./registrationReducer";

export const rootState = combineReducers<Store>({
	loadings: loadingsReducer,
	login: loginReducer,
	navigation: navigationReducer,
	posts: postsReducer,
	profile: profileReducer,
	registration: registrationReducer,
});

export { setProfileAC } from "./profileReducer";
export { addPostsAC } from "./postsReducer";
export {
	loadingAppEndAC,
	loadingAppStartAC,
	loadingPostsEndAC,
	loadingPostsStartAC,
	loadingProfileEndAC,
	loadingProfileStartAC,
} from "./loadingsReducer";
export { loginAC, logoutAC } from "./loginReducer";
