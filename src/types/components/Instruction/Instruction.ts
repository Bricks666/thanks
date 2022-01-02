import { OnlyClassComponent } from "..";
import { Instruction } from "../../redux";

export interface InstructionComponent extends OnlyClassComponent, Instruction {}
