import React, { FC } from "react";
import { useLoginHandler } from "../../hooks";
import {
	LoginFormValues,
	OnlyClassComponent,
	ValidationError,
	Validator,
} from "../../types/components";
import { Form, Field } from "react-final-form";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button";

const validator: Validator<LoginFormValues> = (values) => {
	const errors: ValidationError<LoginFormValues> = {};

	if (values.login === "") {
		errors.login = "Поле логин не должно быть пустым";
	}

	if (values.password === "") {
		errors.password = "Поле логин не должно быть пустым";
	}

	return errors;
};

const initialValues: LoginFormValues = {
	login: "",
	password: "",
	remember: false,
};

export const LoginForm: FC<OnlyClassComponent> = ({ className }) => {
	const login = useLoginHandler();

	return (
		<Form
			onSubmit={login}
			validate={validator}
			initialValues={initialValues}
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
						<Field name="remember" type="checkbox" render={Input}>
							Запомнить меня
						</Field>
						<Button type="submit" title="Войти" disabled={invalid}>
							Войти
						</Button>
					</form>
				);
			}}
		/>
	);
};
