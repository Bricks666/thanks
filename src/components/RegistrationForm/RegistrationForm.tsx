import React, { FC } from "react";
import classNames from "classnames";
import { useRegistrationHandler } from "../../hooks";
import {
	FormField,
	FormValidation,
	OnlyClassComponent,
	RegistrationFormValues,
} from "../../types/components";
import { Form } from "../common/Form";

const registrationFields: FormField<RegistrationFormValues>[] = [
	{
		name: "login",
		type: "text",
		text: "Логин",
	},
	{
		name: "password",
		type: "password",
		text: "Повторите пароль",
	},
	{
		name: "passwordAgain",
		type: "password",
		text: "Повторите пароль",
	},
];

const registrationValidation: FormValidation<RegistrationFormValues>[] = [
	{
		field: "login",
		type: "not null",
		errorMessage: "Поле логина не должно быть пустым",
	},
	{
		field: "password",
		type: "not null",
		errorMessage: "Пароль не должен быть пустым",
	},
	{
		field: "passwordAgain",
		type: "equal",
		errorMessage: "Пароли должны совпадать",
		equivalent: "password",
	},
];

export const RegistrationForm: FC<OnlyClassComponent> = ({ className }) => {
	const registration = useRegistrationHandler();

	return (
		<Form
			className={classNames(className)}
			onSubmit={registration}
			fields={registrationFields}
			validation={registrationValidation}
			buttonText="Зарегистрироваться"
		/>
	);
};
