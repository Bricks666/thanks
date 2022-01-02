import { URL } from "../common";

export interface Instruction {
	picture: URL;
	text: string;
}

export enum InstructionActionTypes {
	SET_INSTRUCTION = "thanks/instruction/SET_INSTRUCTION",
}

interface SetInstructionPayload {
	readonly instructions: Instruction[];
}

interface SetInstructionAction {
	readonly type: InstructionActionTypes.SET_INSTRUCTION;
	readonly payload: SetInstructionPayload;
}

export type InstructionActions = SetInstructionAction;

export type SetInstructionAC = (
	instructions: Instruction[]
) => SetInstructionAction;
