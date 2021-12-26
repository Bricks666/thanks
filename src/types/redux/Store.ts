import {
	LoadingsState,
	LoginState,
	NavigationItem,
	Post,
	ProfileState,
} from ".";

export interface Store {
	readonly profile: ProfileState;
	readonly posts: Post[];
	readonly loadings: LoadingsState;
	readonly navigation: NavigationItem[];
	readonly login: LoginState;
}
