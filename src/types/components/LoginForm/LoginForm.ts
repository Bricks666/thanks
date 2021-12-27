import { FormEventHandler } from "react";
import { FormSubmitHandler, OnlyClassComponent } from "..";

export interface LoginFormComponent extends OnlyClassComponent {
	handleSubmit: FormEventHandler<HTMLFormElement>;
}

export interface LoginFormValues {
	login: string;
	password: string;
	remember: boolean;
}

export type LoginSubmitHandler = FormSubmitHandler<LoginFormValues>;
