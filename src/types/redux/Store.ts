import {
	Contact,
	LoadingsState,
	LoginState,
	Payment,
	Post,
	ProfileState,
} from ".";
import { EmptyObject } from "../common";

export interface Store {
	readonly profile: ProfileState;
	readonly posts: Post[];
	readonly loadings: LoadingsState;
	readonly login: LoginState;
	readonly registration: EmptyObject;
	readonly payments: Payment[];
	readonly contacts: Contact[];
}
