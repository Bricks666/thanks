import { FormSubmitHandler } from "..";

export interface LoginFormValues {
	readonly login: string;
	readonly password: string;
	readonly remember: boolean;
}

export type LoginSubmitHandler = FormSubmitHandler<LoginFormValues>;
