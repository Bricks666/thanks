import { getIsLogin } from "../selectors";
import { UseIsLogin } from "../types/hooks";
import { useTypedSelector } from "./useTypedSelector";

export const useIsLogin: UseIsLogin = () => {
	return useTypedSelector(getIsLogin);
};
