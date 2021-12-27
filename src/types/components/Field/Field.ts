import { FieldRenderProps } from "react-final-form";
import { OnlyClassComponent } from "..";

export interface FieldComponent
	extends OnlyClassComponent,
		FieldRenderProps<string | undefined, HTMLInputElement> {}
