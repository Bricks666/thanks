import { SimpleFunction } from "./../common/Common";
import { TypedThunk } from ".";
import { LoginFormValues } from "../components";

export interface LoginState {
	readonly isLogin: boolean;
}

export enum LoginActionTypes {
	LOGIN = "thanks/login/LOGIN",
	LOGOUT = "thanks/login/LOGOUT",
}

interface LoginAction {
	readonly type: LoginActionTypes.LOGIN;
}

interface LogoutAction {
	readonly type: LoginActionTypes.LOGOUT;
}

export type LoginThunk = (values: LoginFormValues) => TypedThunk<boolean>;
export type LogoutThunk = SimpleFunction<TypedThunk<void>>;

export type LoginActions = LogoutAction | LoginAction;

export type LoginAC = () => LoginAction;
export type LogoutAC = () => LogoutAction;
