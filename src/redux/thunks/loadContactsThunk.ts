import { startLoadingAC } from "..";
import { getContacts } from "../../api";
import { LoadContactsThunk } from "../../types/redux";
import { endLoadingAC, setContactsAC } from "../reducers";

export const loadContactsThunk: LoadContactsThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingAC("loadingContacts"));

			const response = await getContacts();

			dispatch(setContactsAC(response));

			dispatch(endLoadingAC("loadingContacts"));
		} catch (e) {
			console.log(e);
		}
	};
};
