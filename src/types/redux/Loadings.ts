export interface LoadingsState {
	readonly loadingApp: boolean;
	readonly loadingProfile: boolean;
	readonly loadingPosts: boolean;
	readonly loadingPayments: boolean;
	readonly loadingInstructions: boolean;
	readonly loadingContacts: boolean;
}

export type LoadingTypes = keyof LoadingsState;

export enum LoadingActionTypes {
	START_LOADING = "thanks/loadings/START_LOADING",
	END_LOADING = "thanks/loadings/END_LOADING",
}

interface LoadingActionPayload {
	readonly loadingName: LoadingTypes;
}

interface StartLoadingAction {
	readonly type: LoadingActionTypes.START_LOADING;
	readonly payload: LoadingActionPayload;
}
interface EndLoadingAction {
	readonly type: LoadingActionTypes.END_LOADING;
	readonly payload: LoadingActionPayload;
}

export type LoadingsActions = EndLoadingAction | StartLoadingAction;

export type StartLoadingAC = (loadingName: LoadingTypes) => StartLoadingAction;
export type EndLoadingAC = (loadingName: LoadingTypes) => EndLoadingAction;
