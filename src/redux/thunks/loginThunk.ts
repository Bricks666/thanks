import { loginAC } from "..";
import { login } from "../../api";
import { LoginThunk } from "../../types/redux";

export const loginThunk: LoginThunk = (values, formApi) => {
	return async (dispatch) => {
		try {
			// Возможно стоит перенести состояние загрузки в свои сектора
			console.log(values);
			console.log(formApi);
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
