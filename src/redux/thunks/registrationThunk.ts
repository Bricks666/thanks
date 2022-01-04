import { registration } from "../../api";
import { RegistrationThunk } from "../../types/redux";

export const registrationThunk: RegistrationThunk = (values) => {
	return async () => {
		try {
			console.log(values);
			const response = await registration(values.login, values.password);
			if (response) {
				return true;
			}

			return false;
		} catch (e) {
			console.log(e);
			return false;
		}
	};
};
