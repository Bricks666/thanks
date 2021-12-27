export { store } from "./store";
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
export { loginAC, loginThunk, logoutAC } from "./loginReducer";
export { registrationThunk } from "./registrationReducer";
