/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateValidation, ValidationError } from "../../../types/components";

export const createValidation: CreateValidation = (validation) => {
	return (values) => {
		const errors: ValidationError<any> = {};

		validation.forEach(({ type, field, equivalent, errorMessage }) => {
			switch (type) {
				case "equal": {
					if (values[field] !== equivalent) {
						// errors[field] = errorMessage;
					}
					break;
				}
				case "not null": {
					if (!!values[field] === !!null) {
						// errors[field] = errorMessage;
					}
					break;
				}
			}
		});

		return errors;
	};
};
