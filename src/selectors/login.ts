import { GetIsLogin } from "../types/selectors";

export const getIsLogin: GetIsLogin = (state) => {
	return state.login.isLogin;
};
