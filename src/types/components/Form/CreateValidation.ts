import { FormValidation, Validator } from ".";

export type CreateValidation = <T extends { [key: string]: string }>(
	validation: FormValidation[]
) => Validator<T>;
