import { RegistrationThunk } from "../../types/redux";

export const registrationThunk: RegistrationThunk = (values, formApi) => {
	return async () => {
		try {
			console.log(values);
			console.log(formApi);
		} catch (e) {
			console.log(e);
		}
	};
};
