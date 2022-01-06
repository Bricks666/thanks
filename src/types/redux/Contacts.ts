import { TypedThunk } from ".";
import { ID, SimpleFunction } from "../common";

export interface Contact {
	readonly id: ID;
	readonly name: string;
	readonly value: string;
}

export enum ContactsActionTypes {
	SET_CONTACTS = "thanks/contacts/SET_CONTACTS",
}

interface SetContactsPayload {
	readonly contacts: Contact[];
}

interface SetContactsAction {
	readonly type: ContactsActionTypes.SET_CONTACTS;
	readonly payload: SetContactsPayload;
}

export type ContactsActions = SetContactsAction;

export type SetContactsAC = (contacts: Contact[]) => SetContactsAction;
export type LoadContactsThunk = SimpleFunction<TypedThunk<void>>;
