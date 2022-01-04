import { FormApi, FORM_ERROR } from "final-form";
import { AnyObject } from "../../common";

export type ValidationError<T extends object> = {
	-readonly [P in keyof T]?: string;
};
type SubmitionError<T extends object> = ValidationError<T> & {
	[FORM_ERROR]?: string;
};

type SubmitionErrorHandler<T extends object> = (
	errors?: SubmitionError<T>
) => void;

export type FormSubmitHandler<T extends object, R = void | Promise<void>> = (
	values: T,
	formApi: FormApi<T, Partial<T>>,
	errorHandler?: SubmitionErrorHandler<T>
) => R;

export type Validator<T extends AnyObject> = (values: T) => ValidationError<T>;
export type InitialFormValues<T> = Partial<T>;
