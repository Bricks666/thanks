import React, { FC } from "react";
import { useRegistrationHandler } from "../../hooks";
import {
	OnlyClassComponent,
	RegistrationFormValues,
	ValidationError,
	Validator,
} from "../../types/components";
import { Form, Field } from "react-final-form";
import { Button } from "../common/Button";
import { Input } from "../common/Input/Input";

const initialValues: RegistrationFormValues = {
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
			subscription={{ submitting: true, invalid: true }}
			render={({ handleSubmit, invalid }) => {
				return (
					<form className={className} onSubmit={handleSubmit}>
						<Field name="login" render={Input}>
							Логин
						</Field>
						<Field name="password" type="password" render={Input}>
							Пароль
						</Field>
						<Field name="passwordAgain" type="password" render={Input}>
							Повторите пароль
						</Field>
						<Button type="submit" title="Зарегистрироваться" disabled={invalid}>
							Зарегистрироваться
						</Button>
					</form>
				);
			}}
		/>
	);
};
