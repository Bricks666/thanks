import {
	InstructionActions,
	InstructionActionTypes,
	SetInstructionAC,
} from "./../../types/redux/Instruction";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.instructions,
	action: InstructionActions
) {
	if (action.type === InstructionActionTypes.SET_INSTRUCTION) {
		return action.payload.instructions;
	}

	return state;
}

export const setInstructionAC: SetInstructionAC = (instructions) => {
	return {
		type: InstructionActionTypes.SET_INSTRUCTION,
		payload: {
			instructions,
		},
	};
};
