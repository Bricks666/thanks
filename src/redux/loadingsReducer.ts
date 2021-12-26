import {
	LoadingActionTypes,
	LoadingAppEndAC,
	LoadingAppStartAC,
	LoadingPostsEndAC,
	LoadingPostsStartAC,
	LoadingProfileEndAC,
	LoadingProfileStartAC,
	LoadingsActions,
} from "../types/redux";
import { initialState } from "./initialState";

export default function reducer(
	state = initialState.loadings,
	action: LoadingsActions
) {
	switch (action.type) {
		case LoadingActionTypes.LOADING_APP_START: {
			return {
				...state,
				loadingApp: true,
			};
		}
		case LoadingActionTypes.LOADING_APP_END: {
			return {
				...state,
				loadingApp: false,
			};
		}
		case LoadingActionTypes.LOADING_PROFILE_START: {
			return {
				...state,
				loadingProfile: true,
			};
		}
		case LoadingActionTypes.LOADING_PROFILE_END: {
			return {
				...state,
				loadingProfile: false,
			};
		}
		case LoadingActionTypes.LOADING_POSTS_START: {
			return {
				...state,
				loadingPosts: true,
			};
		}
		case LoadingActionTypes.LOADING_POSTS_END: {
			return {
				...state,
				loadingPosts: false,
			};
		}

		default: {
			return state;
		}
	}
}

export const loadingAppStartAC: LoadingAppStartAC = () => {
	return {
		type: LoadingActionTypes.LOADING_APP_START,
	};
};

export const loadingAppEndAC: LoadingAppEndAC = () => {
	return {
		type: LoadingActionTypes.LOADING_APP_END,
	};
};

export const loadingProfileStartAC: LoadingProfileStartAC = () => {
	return {
		type: LoadingActionTypes.LOADING_PROFILE_START,
	};
};

export const loadingProfileEndAC: LoadingProfileEndAC = () => {
	return {
		type: LoadingActionTypes.LOADING_PROFILE_END,
	};
};

export const loadingPostsStartAC: LoadingPostsStartAC = () => {
	return {
		type: LoadingActionTypes.LOADING_POSTS_START,
	};
};

export const loadingPostsEndAC: LoadingPostsEndAC = () => {
	return {
		type: LoadingActionTypes.LOADING_POSTS_END,
	};
};
