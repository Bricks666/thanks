import React, { FC } from "react";
import { useLoginHandler } from "../../hooks";
import {
	LoginFormValues,
	LoginInitialValues,
	OnlyClassComponent,
	ValidationError,
	Validator,
} from "../../types/components";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { Input } from "../common/Input/Input";
import { Button } from "../common/Button";
import { ErrorMessage } from "../common/ErrorMessage";

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

const initialValues: LoginInitialValues = {
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
			subscription={{ submitting: true, submitErrors: true }}
			render={({ handleSubmit, submitErrors, submitting }) => {
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
						<Field name="remember" type="checkbox" render={Input}>
							Запомнить меня
						</Field>
						<Button type="submit" title="Войти" disabled={submitting}>
							Войти
						</Button>
					</form>
				);
			}}
		/>
	);
};
