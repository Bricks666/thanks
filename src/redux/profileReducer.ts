import {
	ProfileActions,
	ProfileActionTypes,
	SetProfileAC,
} from "../types/redux";
import { initialState } from "./initialState";

export default function reducer(
	state = initialState.profile,
	action: ProfileActions
) {
	if (action.type === ProfileActionTypes.SET_PROFILE) {
		return {
			...state,
			...action.payload.profile,
		};
	}

	return state;
}

export const setProfileAC: SetProfileAC = (profile) => {
	return {
		type: ProfileActionTypes.SET_PROFILE,
		payload: {
			profile,
		},
	};
};
