import React, { FC } from "react";
import classNames from "classnames";
import { useLoginHandler } from "../../hooks";
import {
	FormField,
	FormValidation,
	LoginFormValues,
	OnlyClassComponent,
} from "../../types/components";
import { Form } from "../common/Form";

const loginFields: FormField<LoginFormValues>[] = [
	{ name: "login", text: "Логин", type: "text" },
	{
		name: "password",
		text: "Пароль",
		type: "text",
	},
];

const loginValidation: FormValidation<LoginFormValues>[] = [
	{
		field: "login",
		type: "not null",
		errorMessage: "Поле логин не должно быть пустым",
	},
	{
		field: "password",
		type: "not null",
		errorMessage: "Поле пароля не должно быть пустым",
	},
];

export const LoginForm: FC<OnlyClassComponent> = ({ className }) => {
	const login = useLoginHandler();

	return (
		<Form<LoginFormValues>
			className={classNames(className)}
			onSubmit={login}
			fields={loginFields}
			validation={loginValidation}
			buttonText="Войти"
		/>
	);
};
