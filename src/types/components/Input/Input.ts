import { FieldRenderProps } from "react-final-form";
import { OnlyClassComponent } from "..";

export interface InputComponent
	extends OnlyClassComponent,
		FieldRenderProps<string | undefined, HTMLInputElement> {
	disabled?: boolean;
	readonly?: boolean;
}
