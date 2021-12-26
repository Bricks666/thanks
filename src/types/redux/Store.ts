import { LoadingsState, NavigationItem, Post, ProfileState } from ".";

export interface Store {
	readonly profile: ProfileState;
	readonly posts: Post[];
	readonly loadings: LoadingsState;
	readonly navigation: NavigationItem[];
}
