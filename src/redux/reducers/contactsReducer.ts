import {
	ContactsActions,
	ContactsActionTypes,
	SetContactsAC,
} from "../../types/redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.contacts,
	action: ContactsActions
) {
	if (action.type === ContactsActionTypes.SET_CONTACTS) {
		return action.payload.contacts;
	}
	return state;
}
export const setContactsAC: SetContactsAC = (contacts) => {
	return {
		type: ContactsActionTypes.SET_CONTACTS,
		payload: {
			contacts,
		},
	};
};
