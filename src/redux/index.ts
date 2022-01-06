export { store } from "./store";
export {
	startLoadingAC,
	endLoadingAC,
	loginAC,
	logoutAC,
	setPaymentsAC,
	setProfileAC,
	addPostAC,
	setInstructionAC,
} from "./reducers";
export {
	registrationThunk,
	loginThunk,
	logoutThunk,
	loadPaymentsThunk,
	loadProfileThunk,
	loadPostsThunk,
	loadInstructionsThunk,
	loadContactsThunk,
} from "./thunks";
