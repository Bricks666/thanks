import React, { FC } from "react";
import { useRegistrationHandler } from "../../hooks";
import {
	OnlyClassComponent,
	RegistrationFormValues,
	RegistrationInitialValues,
	ValidationError,
	Validator,
} from "../../types/components";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { Button } from "../common/Button";
import { Input } from "../common/Input/Input";
import { ErrorMessage } from "../common/ErrorMessage";

const initialValues: RegistrationInitialValues = {
	login: "",
	password: "",
	passwordAgain: "",
};
const validator: Validator<RegistrationFormValues> = (values) => {
	const errors: ValidationError<RegistrationFormValues> = {};

	if (values.login === "") {
		errors.login = "Поле логина не должно быть пустым";
	}

	if (values.password === "") {
		errors.password = "Пароль не должен быть пустым";
	}
	if (values.passwordAgain !== values.password) {
		errors.passwordAgain = "Пароли должны совпадать";
	}

	return errors;
};

export const RegistrationForm: FC<OnlyClassComponent> = ({ className }) => {
	const registration = useRegistrationHandler();

	return (
		<Form
			onSubmit={registration}
			initialValues={initialValues}
			validate={validator}
			subscription={{ submitting: true, submitErrors: true }}
			render={({ handleSubmit, submitting, submitErrors }) => {
				const formError = submitErrors && submitErrors[FORM_ERROR];
				return (
					<form className={className} onSubmit={handleSubmit}>
						{formError && <ErrorMessage>{formError}</ErrorMessage>}
						<Field name="login" render={Input}>
							Логин
						</Field>
						<Field name="password" type="password" render={Input}>
							Пароль
						</Field>
						<Field name="passwordAgain" type="password" render={Input}>
							Повторите пароль
						</Field>
						<Button
							type="submit"
							title="Зарегистрироваться"
							disabled={submitting}
						>
							Зарегистрироваться
						</Button>
					</form>
				);
			}}
		/>
	);
};
