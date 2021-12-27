/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateValidator, ValidationError } from "../../../types/components";

export const createValidator: CreateValidator = (validation) => {
	return (values) => {
		/* TODO: Нормально затипизировать */
		const errors: ValidationError<any> = {};
		console.log(values);
		validation.forEach(({ type, field, equivalent, errorMessage }) => {
			switch (type) {
				case "equal": {
					if (typeof equivalent === "undefined") {
						throw new Error("When use equal type must be set equivalent");
					}

					if (values[field] !== values[equivalent]) {
						errors[field] = errorMessage;
					}
					break;
				}
				case "not null": {
					if (!!values[field] === !!null) {
						errors[field] = errorMessage;
					}
					break;
				}
			}
		});

		return errors;
	};
};
