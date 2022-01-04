import { PropsWithChildren } from "react";
import { FieldRenderProps } from "react-final-form";
import { OnlyClassComponent } from "..";

export interface SelectComponentProps<T>
	extends OnlyClassComponent,
		FieldRenderProps<T, HTMLSelectElement> {
	readonly options?: T[];
	readonly optionClassName?: string;
	readonly disabled?: boolean;
}
export type SelectComponent = <T extends string | number>(
	props: PropsWithChildren<SelectComponentProps<T>>
) => JSX.Element;
