import {
	LoginAC,
	LoginActions,
	LoginActionTypes,
	LoginThunk,
	LogoutAC,
} from "./../types/redux";
import { initialState } from "./initialState";

export default function reducer(
	state = initialState.login,
	action: LoginActions
) {
	switch (action.type) {
		case LoginActionTypes.LOGIN: {
			return {
				...state,
				isLogin: true,
			};
		}
		case LoginActionTypes.LOGOUT: {
			return {
				...state,
				login: false,
			};
		}
		default: {
			return state;
		}
	}
}

export const loginAC: LoginAC = () => {
	return {
		type: LoginActionTypes.LOGIN,
	};
};

export const logoutAC: LogoutAC = () => {
	return {
		type: LoginActionTypes.LOGOUT,
	};
};

export const loginThunk: LoginThunk = (values, formApi) => {
	return async (dispatch) => {
		try {
			// Возможно стоит перенести состояние загрузки в свои сектора
			console.log(values);
			console.log(formApi);
			setTimeout(() => {
				dispatch(loginAC());
			}, 1000);
		} catch (e) {
			console.log(e);
		}
	};
};
