import { ComponentType } from "react";
import { OnlyClassComponent } from "..";

export interface Step {
	title: string;
	Component: ComponentType<StepFormComponent>;
}

export interface StepFormComponent extends OnlyClassComponent {
	step: number;
	formName: string;
}
