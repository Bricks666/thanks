import { FormApi } from "final-form";
import { AnyObject, UnReadonly } from "../../common";

export type ValidationError<T extends object> = Partial<UnReadonly<T>>;

type SubmitionError<T extends object> = ValidationError<T>;

type SubmitionErrorHandler<T extends object> = (
	errors?: SubmitionError<T>
) => void;

export type FormSubmitHandler<T extends object, R = void | Promise<void>> = (
	values: T,
	formApi: FormApi<T, T>,
	errorHandler?: SubmitionErrorHandler<T>
) => R;

export type Validator<T extends AnyObject> = (values: T) => ValidationError<T>;
