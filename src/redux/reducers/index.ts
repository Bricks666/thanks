import { combineReducers } from "redux";
import { Store } from "../../types/redux";
import loadingsReducer from "./loadingsReducer";
import loginReducer from "./loginReducer";
import postsReducer from "./postsReducer";
import profileReducer from "./profileReducer";
import registrationReducer from "./registrationReducer";
import paymentsReducer from "./paymentsReducer";
import contactsReducer from "./contactsReducer";
import instructionReducer from "./instructionReducer";

export const rootState = combineReducers<Store>({
	loadings: loadingsReducer,
	login: loginReducer,
	posts: postsReducer,
	profile: profileReducer,
	registration: registrationReducer,
	payments: paymentsReducer,
	contacts: contactsReducer,
	instructions: instructionReducer,
});

export { setProfileAC } from "./profileReducer";
export { addPostAC, setPostsAC } from "./postsReducer";
export { startLoadingAC, endLoadingAC } from "./loadingsReducer";
export { loginAC, logoutAC } from "./loginReducer";
export { setPaymentsAC, addPaymentAC } from "./paymentsReducer";
export { setContactsAC } from "./contactsReducer";
export { setInstructionAC } from "./instructionReducer";
