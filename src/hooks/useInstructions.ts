import { getInstructions } from "../selectors";
import { useTypedSelector } from "./useTypedSelector";

export const useInstructions = () => {
	return useTypedSelector(getInstructions);
};
