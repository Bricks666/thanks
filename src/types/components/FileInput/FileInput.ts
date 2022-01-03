import { InputComponentProps, OnlyClassComponent } from "..";

export interface FileInputComponent
	extends OnlyClassComponent,
		InputComponentProps<undefined> {
	accept?: string;
}
