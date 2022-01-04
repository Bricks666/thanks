import { InputComponentProps, OnlyClassComponent } from "..";

export interface FileInputComponent
	extends OnlyClassComponent,
		InputComponentProps<undefined> {
	readonly accept?: string;
}
