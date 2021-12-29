import { GetProfile } from "../types/selectors";

export const getProfile: GetProfile = (state) => {
	return state.profile;
};
