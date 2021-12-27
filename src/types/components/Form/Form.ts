/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormApi } from "final-form";
import { OnlyClassComponent } from "..";
import { MappedObject } from "../../common";

export type ValidationError<T extends object> = Partial<T>;
export type SubmitionError<T extends object> = ValidationError<T>;
export type SubmitionErrorHandler<T extends object> = (
	errors?: SubmitionError<T>
) => void;
export type FormSubmitHandler<T extends object, R = void | Promise<void>> = (
	values: T,
	formApi: FormApi<T, T>,
	errorHandler?: SubmitionErrorHandler<T>
) => R;
export type Validator<T extends { [key: string]: string }> = (
	values: T
) => ValidationError<T>;

export interface FormComponentProps<FormValues extends object>
	extends OnlyClassComponent {
	readonly onSubmit: FormSubmitHandler<FormValues>;
	readonly fields: FormField[];
	readonly buttonText: string;
	readonly validation?: FormValidation[];
}
type FieldType = "field" | "textarea" | "checkbox";

export interface FormField {
	readonly name: string;
	readonly component: FieldType;
}

type ValidationType = "equal" | "not null";

export interface FormValidation {
	readonly field: string;
	readonly type: ValidationType;
	readonly errorMessage: string;
	readonly equivalent?: string;
}

export type FormComponent = <FormValues extends MappedObject<string, any>>(
	props: FormComponentProps<FormValues>
) => JSX.Element;
