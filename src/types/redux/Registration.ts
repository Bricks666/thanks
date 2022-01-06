import { TypedThunk } from ".";
import { RegistrationFormValues } from "../components";

export type RegistrationThunk = (
	values: RegistrationFormValues
) => TypedThunk<boolean>;
