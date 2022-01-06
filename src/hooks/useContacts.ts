import { useEffect } from "react";
import { loadContactsThunk } from "../redux";
import { getContacts } from "../selectors";
import { UseContacts } from "../types/hooks";
import { useTypedDispatch } from "./useTypedDispatch";
import { useTypedSelector } from "./useTypedSelector";

export const useContacts: UseContacts = () => {
	const contacts = useTypedSelector(getContacts);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		if (contacts.length === 0) {
			dispatch(loadContactsThunk());
		}
	}, [dispatch, contacts.length]);

	return contacts;
};
