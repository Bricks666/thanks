export interface LoadingsState {
	readonly loadingApp: boolean;
	readonly loadingProfile: boolean;
	readonly loadingPosts: boolean;
}

export enum LoadingActionTypes {
	LOADING_APP_START = "thanks/loadings/LOADING_APP_START",
	LOADING_APP_END = "thanks/loadings/LOADING_APP_END",
	LOADING_PROFILE_START = "thanks/loadings/LOADING_PROFILE_START",
	LOADING_PROFILE_END = "thanks/loadings/LOADING_PROFILE_END",
	LOADING_POSTS_START = "thanks/loadings/LOADING_POSTS_START",
	LOADING_POSTS_END = "thanks/loadings/LOADING_POSTS_END",
}

interface LoadingAppStartAction {
	type: LoadingActionTypes.LOADING_APP_START;
}

interface LoadingAppEndAction {
	type: LoadingActionTypes.LOADING_APP_END;
}

interface LoadingProfileStartAction {
	type: LoadingActionTypes.LOADING_PROFILE_START;
}

interface LoadingProfileEndAction {
	type: LoadingActionTypes.LOADING_PROFILE_END;
}

interface LoadingPostsStartAction {
	type: LoadingActionTypes.LOADING_POSTS_START;
}

interface LoadingPostsEndAction {
	type: LoadingActionTypes.LOADING_POSTS_END;
}

export type LoadingsActions =
	| LoadingAppStartAction
	| LoadingAppEndAction
	| LoadingProfileStartAction
	| LoadingProfileEndAction
	| LoadingPostsStartAction
	| LoadingPostsEndAction;

export type LoadingAppStartAC = () => LoadingAppStartAction;
export type LoadingAppEndAC = () => LoadingAppEndAction;
export type LoadingProfileStartAC = () => LoadingProfileStartAction;
export type LoadingProfileEndAC = () => LoadingProfileEndAction;
export type LoadingPostsStartAC = () => LoadingPostsStartAction;
export type LoadingPostsEndAC = () => LoadingPostsEndAction;
