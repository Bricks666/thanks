import { RegistrationThunk } from "../types/redux";
import { initialState } from "./initialState";

export default function reducer(state = initialState.registration) {
	return state;
}

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
