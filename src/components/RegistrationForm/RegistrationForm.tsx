import React, { FC } from "react";
import { useRegistrationHandler } from "../../hooks";
import {
	OnlyClassComponent,
	RegistrationFormValues,
	ValidationError,
	Validator,
} from "../../types/components";
import { Form, Field as ReactField } from "react-final-form";
import { Field } from "../common/Field";
import { Button } from "../common/Button";

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
			render={({ handleSubmit, invalid }) => {
				return (
					<form className={className} onSubmit={handleSubmit}>
						<ReactField name="login" render={Field}>
							Логин
						</ReactField>
						<ReactField name="password" type="password" render={Field}>
							Пароль
						</ReactField>
						<ReactField name="passwordAgain" type="password" render={Field}>
							Повторите пароль
						</ReactField>
						<Button type="submit" title="Зарегистрироваться" disabled={invalid}>
							Зарегистрироваться
						</Button>
					</form>
				);
			}}
		/>
	);
};
