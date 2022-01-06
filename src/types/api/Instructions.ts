import { SimpleFunction } from "../common";
import { Instruction } from "../redux";

export type GetInstructions = SimpleFunction<Promise<Instruction[]>>;
