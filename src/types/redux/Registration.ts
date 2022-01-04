import { TypedThunk } from ".";
import { FormSubmitHandler, RegistrationFormValues } from "../components";

export type RegistrationThunk = FormSubmitHandler<
	RegistrationFormValues,
	TypedThunk<boolean>
>;
