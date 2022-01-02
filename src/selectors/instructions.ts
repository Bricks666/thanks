import { GetInstructions } from "../types/selectors";

export const getInstructions: GetInstructions = (state) => {
	return state.instructions;
};
