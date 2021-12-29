import { GetContacts } from "../types/selectors";

export const getContacts: GetContacts = (state) => {
	return state.contacts;
};
