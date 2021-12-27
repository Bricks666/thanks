import {
	LoadingsState,
	LoginState,
	NavigationItem,
	Post,
	ProfileState,
} from ".";
import { EmptyObject } from "../common";

export interface Store {
	readonly profile: ProfileState;
	readonly posts: Post[];
	readonly loadings: LoadingsState;
	readonly navigation: NavigationItem[];
	readonly login: LoginState;
	readonly registration: EmptyObject;
}
