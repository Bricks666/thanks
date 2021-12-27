import { FormSubmitHandler } from "..";

export interface RegistrationFormValues {
	readonly login: string;
	readonly password: string;
	readonly passwordAgain: string;
}

export type RegistrationSubmitHandler =
	FormSubmitHandler<RegistrationFormValues>;
