import React from "react";
import { Form as ReactForm, Field as ReactField } from "react-final-form";
import { FormComponent } from "../../../types/components";
import { Button } from "../Button";
import { Field } from "../Field";
import { createValidation } from "./createValidation";

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

	const validator = validation && createValidation(validation);

	return (
		<ReactForm
			className={className}
			validate={validator}
			onSubmit={onSubmit}
			render={({ handleSubmit }) => {
				return (
					<form onSubmit={handleSubmit}>
						{fields.map((field) => {
							// TODO: Сделать типизацию
							let Component;
							if (field.component === "field") {
								return (
									<ReactField
										name={field.name}
										render={Field}
										key={field.name}
									/>
								);
							}
						})}
						<Button type="submit" title={buttonText}>
							{buttonText}
						</Button>
					</form>
				);
			}}
		/>
	);
};
