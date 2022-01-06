import { endLoadingAC, setProfileAC, startLoadingAC } from "..";
import { getProfile } from "../../api";
import { LoadProfileThunk } from "../../types/redux";

export const loadProfileThunk: LoadProfileThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingAC("loadingProfile"));

			const response = await getProfile();
			dispatch(setProfileAC(response));

			dispatch(endLoadingAC("loadingProfile"));
		} catch (e) {
			console.log(e);
		}
	};
};
