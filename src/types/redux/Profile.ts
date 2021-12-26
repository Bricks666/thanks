import { ID, URL } from "../common";

export interface ProfileState {
	readonly id: ID;
	readonly name: string;
	readonly photo?: URL;
}

export enum ProfileActionTypes {
	SET_PROFILE = "thanks/profile/SET_PROFILE",
}

interface SetProfilePayload {
	readonly profile: ProfileState;
}

interface SetProfileAction {
	readonly type: ProfileActionTypes.SET_PROFILE;
	readonly payload: SetProfilePayload;
}

export type ProfileActions = SetProfileAction;

export type SetProfileAC = (profile: ProfileState) => SetProfileAction;
