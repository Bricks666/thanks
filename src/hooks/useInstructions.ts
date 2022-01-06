import { useEffect } from "react";
import { loadInstructionsThunk } from "../redux";
import { getInstructions } from "../selectors";
import { UseInstructions } from "../types/hooks";
import { useTypedDispatch } from "./useTypedDispatch";
import { useTypedSelector } from "./useTypedSelector";

export const useInstructions: UseInstructions = () => {
	const instructions = useTypedSelector(getInstructions);
	const dispatch = useTypedDispatch();
	useEffect(() => {
		if (instructions.length === 0) {
			dispatch(loadInstructionsThunk());
		}
	}, [dispatch, instructions.length]);

	return instructions;
};
