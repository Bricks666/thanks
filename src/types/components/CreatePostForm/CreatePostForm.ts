import { ComponentType } from "react";
import { OnlyClassComponent } from "..";

export interface Step {
	readonly title: string;
	readonly Component: ComponentType<StepFormComponent>;
}

export interface StepFormComponent extends OnlyClassComponent {
	readonly step: number;
	readonly formName: string;
}
