import { combineReducers } from "redux";
import { Store } from "../../types/redux";
import loadingsReducer from "./loadingsReducer";
import loginReducer from "./loginReducer";
import postsReducer from "./postsReducer";
import profileReducer from "./profileReducer";
import registrationReducer from "./registrationReducer";
import paymentsReducer from "./paymentsReducer";
import contactsReducer from "./contactsReducer";

export const rootState = combineReducers<Store>({
	loadings: loadingsReducer,
	login: loginReducer,
	posts: postsReducer,
	profile: profileReducer,
	registration: registrationReducer,
	payments: paymentsReducer,
	contacts: contactsReducer,
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
export { setPaymentsAC } from "./paymentsReducer";
export { setContactsAC } from "./contactsReducer";
