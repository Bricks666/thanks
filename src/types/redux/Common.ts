import { ThunkAction } from "redux-thunk";
import {
	ContactsActions,
	InstructionActions,
	LoadingsActions,
	LoginActions,
	PaymentsActions,
	PostsActions,
	ProfileActions,
	Store,
} from ".";

export type RootActions =
	| ProfileActions
	| PostsActions
	| LoadingsActions
	| LoginActions
	| PaymentsActions
	| ContactsActions
	| InstructionActions;

export type TypedThunk<R> = ThunkAction<
	Promise<R>,
	Store,
	undefined,
	RootActions
>;
