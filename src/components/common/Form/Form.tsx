import React from "react";
import { Form as ReactForm } from "react-final-form";
import { FormComponent } from "../../../types/components";
import { Button } from "../Button";
import { createValidator } from "./createValidator";
import { renderField } from "./renderField";

export const Form: FormComponent = ({
	className,
	validation,
	onSubmit,
	fields,
	buttonText,
}) => {
	if (fields.length === 0) {
		throw new Error("form must have more than 0 fields");
	}

	const validator = validation && createValidator(validation);

	return (
		<ReactForm
			validate={validator}
			onSubmit={onSubmit}
			render={({ handleSubmit, pristine }) => {
				return (
					<form className={className} onSubmit={handleSubmit}>
						{fields.map(renderField)}
						<Button type="submit" title={buttonText} disabled={pristine}>
							{buttonText}
						</Button>
					</form>
				);
			}}
		/>
	);
};
