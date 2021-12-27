import React, { FC } from "react";
import classNames from "classnames";
import { useLoginHandler } from "../../hooks";
import { LoginFormValues, OnlyClassComponent } from "../../types/components";
import { Form } from "../common/Form";

export const LoginForm: FC<OnlyClassComponent> = ({ className }) => {
	const login = useLoginHandler();

	return (
		<Form<LoginFormValues>
			className={classNames(className)}
			onSubmit={login}
			fields={[{ name: "login", component: "field" }]}
			buttonText="Войти"
		/>
	);
};
