import { loginAC } from "..";
import { LoginThunk } from "../../types/redux";

export const loginThunk: LoginThunk = (values, formApi) => {
	return async (dispatch) => {
		try {
			// Возможно стоит перенести состояние загрузки в свои сектора
			console.log(values);
			console.log(formApi);
			dispatch(loginAC());
		} catch (e) {
			console.log(e);
		}
	};
};
