import { getProfile } from "../selectors";
import { UseProfile } from "../types/hooks";
import { useTypedSelector } from "./useTypedSelector";

export const useProfile: UseProfile = () => {
	return useTypedSelector(getProfile);
};
