import { FieldRenderProps } from "react-final-form";
import { OnlyClassComponent } from "..";

export interface TextareaComponent
	extends OnlyClassComponent,
		FieldRenderProps<string, HTMLTextAreaElement> {
	disabled?: boolean;
	readonly?: boolean;
}
