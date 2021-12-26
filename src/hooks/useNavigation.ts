import { getNavigation } from "../selectors";
import { UseNavigation } from "../types/hooks";
import { useTypedSelector } from "./useTypedSelector";

export const useNavigation: UseNavigation = () => {
	return useTypedSelector(getNavigation);
};
