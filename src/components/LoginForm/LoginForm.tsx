import React, { FC } from "react";
import { useLoginHandler } from "../../hooks";
import {
	LoginFormValues,
	OnlyClassComponent,
	ValidationError,
	Validator,
} from "../../types/components";
import { Form, Field as ReactField } from "react-final-form";
import { Field } from "../common/Field";
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
			render={({ handleSubmit, invalid }) => {
				return (
					<form className={className} onSubmit={handleSubmit}>
						<ReactField name="login" render={Field}>
							Логин
						</ReactField>
						<ReactField name="password" type="password" render={Field}>
							Пароль
						</ReactField>
						<ReactField name="remember" type="checkbox" render={Field}>
							Запомнить меня
						</ReactField>
						<Button type="submit" title="Войти" disabled={invalid}>
							Войти
						</Button>
					</form>
				);
			}}
		/>
	);
};
