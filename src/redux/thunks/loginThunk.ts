import { loginAC } from "..";
import { login } from "../../api";
import { LoginThunk } from "../../types/redux";

export const loginThunk: LoginThunk = (values) => {
	return async (dispatch) => {
		try {
			const response = await login(
				values.login,
				values.password,
				values.remember
			);
			if (response) {
				dispatch(loginAC());
				return true;
			}
			return false;
		} catch (e) {
			console.log(e);
			return false;
		}
	};
};
