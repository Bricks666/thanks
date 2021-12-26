import { ThunkAction } from "redux-thunk";
import { LoadingsActions, PostsActions, ProfileActions, Store } from ".";

export type RootActions = ProfileActions | PostsActions | LoadingsActions;

export type TypedThunk<R> = ThunkAction<
	Promise<R>,
	Store,
	undefined,
	RootActions
>;
