import { getPayments } from "../selectors";
import { UsePayments } from "../types/hooks";
import { useTypedSelector } from "./useTypedSelector";

export const usePayments: UsePayments = () => {
	return useTypedSelector(getPayments);
};
