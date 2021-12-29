import { logoutAC } from "..";
import { LogoutThunk } from "../../types/redux";

export const logoutThunk: LogoutThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(logoutAC());
		} catch (e) {
			console.log(e);
		}
	};
};
