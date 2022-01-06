import {
	EndLoadingAC,
	LoadingActionTypes,
	LoadingsActions,
	StartLoadingAC,
} from "../../types/redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.loadings,
	action: LoadingsActions
) {
	switch (action.type) {
		case LoadingActionTypes.START_LOADING: {
			return {
				...state,
				[action.payload.loadingName]: true,
			};
		}
		case LoadingActionTypes.END_LOADING: {
			return {
				...state,
				[action.payload.loadingName]: false,
			};
		}

		default: {
			return state;
		}
	}
}

export const startLoadingAC: StartLoadingAC = (loadingName) => {
	return {
		type: LoadingActionTypes.START_LOADING,
		payload: {
			loadingName,
		},
	};
};

export const endLoadingAC: EndLoadingAC = (loadingName) => {
	return {
		type: LoadingActionTypes.END_LOADING,
		payload: {
			loadingName,
		},
	};
};
