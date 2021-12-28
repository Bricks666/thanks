import { MouseEventHandler } from "react";
import { OnlyClassComponent } from "..";

type ButtonType = "submit" | "reset" | "button";

export interface ButtonComponent extends OnlyClassComponent {
	readonly type: ButtonType;
	readonly onClick?: MouseEventHandler<HTMLButtonElement>;
	readonly title: string;
	readonly disabled?: boolean;
}
