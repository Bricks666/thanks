import { FormValidation, Validator } from ".";

export type CreateValidator = <T extends { [key: string]: string }>(
	validation: FormValidation<T>[]
) => Validator<T>;
