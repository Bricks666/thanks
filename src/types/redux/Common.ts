import { ThunkAction } from "redux-thunk";
import { LoadingsActions, LoginActions, PostsActions, ProfileActions, Store } from ".";

export type RootActions = ProfileActions | PostsActions | LoadingsActions | LoginActions

export type TypedThunk<R> = ThunkAction<
	Promise<R>,
	Store,
	undefined,
	RootActions
>;
