import { getContacts } from "../selectors";
import { UseContacts } from "../types/hooks";
import { useTypedSelector } from "./useTypedSelector";

export const useContacts: UseContacts = () => {
	return useTypedSelector(getContacts);
};
