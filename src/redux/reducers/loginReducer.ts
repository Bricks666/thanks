import {
	LoginAC,
	LoginActions,
	LoginActionTypes,
	LogoutAC,
} from "./../../types/redux";
import { initialState } from "../initialState";

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
				isLogin: false,
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
