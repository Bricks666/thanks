import { getLoadingByName } from "../selectors";
import { UseLoading } from "../types/hooks";
import { useTypedSelector } from "./useTypedSelector";

export const useLoading: UseLoading = (loadingName) => {
	return useTypedSelector((state) => getLoadingByName(state, loadingName));
};
