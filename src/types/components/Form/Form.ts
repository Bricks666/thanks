/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormApi } from "final-form";
import { OnlyClassComponent } from "..";
import { MappedObject } from "../../common";

export type ValidationError<T extends object> = Partial<T>;

type SubmitionError<T extends object> = ValidationError<T>;

type SubmitionErrorHandler<T extends object> = (
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

export interface FormComponentProps<FormValues extends MappedObject<any>>
	extends OnlyClassComponent {
	readonly onSubmit: FormSubmitHandler<FormValues>;
	readonly fields: FormField<FormValues>[];
	readonly buttonText: string;
	readonly validation?: FormValidation<FormValues>[];
}

type FieldType = "text" | "big text" /* | "checkbox" */ | "password";

export interface FormField<T extends MappedObject<any>> {
	readonly name: keyof T;
	readonly type: FieldType;
	readonly text?: string;
}

type ValidationType = "equal" | "not null";

export interface FormValidation<T> {
	readonly field: keyof T;
	readonly type: ValidationType;
	readonly errorMessage: string;
	readonly equivalent?: keyof T;
}

/* TODO: Решить что то с any */
export type FormComponent = <FormValues extends MappedObject<any>>(
	props: FormComponentProps<FormValues>
) => JSX.Element;
