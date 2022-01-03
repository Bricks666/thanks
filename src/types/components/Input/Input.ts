import { PropsWithChildren } from "react";
import { FieldRenderProps } from "react-final-form";
import { OnlyClassComponent } from "..";

export interface InputComponentProps<T>
	extends OnlyClassComponent,
		FieldRenderProps<T, HTMLInputElement> {
	disabled?: boolean;
	readonly?: boolean;
}

export type InputComponent = <
	T extends string | number | readonly string[] | undefined = string
>(
	props: PropsWithChildren<InputComponentProps<T>>
) => JSX.Element;
