import classNames from "classnames";
import React, { FC } from "react";
import { Field, Form } from "react-final-form";
import { useCreatePostHandler } from "../../hooks";
import {
	OnlyClassComponent,
	ValidationError,
	Validator,
} from "../../types/components";
import {
	CreatePostFormValues,
	Gender,
} from "../../types/components/CreatePostForm";
import { Button } from "../common/Button";
import { FileInput } from "../common/FileInput";
import { Input } from "../common/Input";
import { PhotoShower } from "../common/PhotoShower";
import { Select } from "../common/Select";
import { Textarea } from "../common/Textarea";
import { FORM_ERROR } from "final-form";
import { ErrorMessage } from "../common/ErrorMessage";

import CreatePostFormStyle from "./CreatePostForm.module.css";

const validation: Validator<CreatePostFormValues> = (values) => {
	const errors: ValidationError<CreatePostFormValues> = {};

	if (values.firstName.trim() === "") {
		errors.firstName = "Имя не должно быть пустым";
	}

	if (values.secondName.trim() === "") {
		errors.secondName = "Фамилия не должна быть пустой";
	}
	if (values.gender.trim() === "") {
		errors.gender = "Пол должен быть заполнен";
	}
	if (values.photo === null) {
		errors.photo = "Нужно выбрать фото";
	}
	if (values.postHeader.trim() === "") {
		errors.postHeader = "Заголовок благодарности должен быть заполнен";
	}
	if (values.briefAboutPerson.trim() === "") {
		errors.briefAboutPerson = "Информация о человеке должна быть заполнена";
	}
	if (values.whyThanks.trim() === "") {
		errors.whyThanks =
			"Причина, по которой вы благодарите должна быть заполнена";
	}

	return errors;
};
const genderValues: Array<Gender> = ["female", "male"];

const initialValue: CreatePostFormValues = {
	firstName: "",
	secondName: "",
	patronymic: "",
	gender: genderValues[0],
	photo: null,
	postHeader: "",
	briefAboutPerson: "",
	whyThanks: "",
};
/* TODO: Провести рефакторинг, форма слишком большая */
export const CreatePostForm: FC<OnlyClassComponent> = ({ className }) => {
	const submitHandler = useCreatePostHandler();

	return (
		<Form<CreatePostFormValues>
			onSubmit={submitHandler}
			subscription={{ submitting: true, values: true, submitErrors: true }}
			validate={validation}
			initialValues={initialValue}
			render={({ handleSubmit, submitting, values, submitErrors }) => {
				const { photo } = values || initialValue;
				const formError = submitErrors && submitErrors[FORM_ERROR];
				return (
					<form
						className={classNames(CreatePostFormStyle.form, className)}
						onSubmit={handleSubmit}
					>
						<legend className={CreatePostFormStyle.legend}>
							Получатель благодарности
						</legend>
						{formError && <ErrorMessage>{formError}</ErrorMessage>}
						<Field<string, HTMLInputElement> name="firstName" component={Input}>
							Имя человека
						</Field>
						<Field<string, HTMLInputElement>
							name="secondName"
							component={Input}
						>
							Фамилия человека
						</Field>
						<Field<string, HTMLInputElement>
							name="patronymic"
							component={Input}
						>
							Отчество человека
						</Field>
						<Field name="gender" options={genderValues} render={Select}>
							Пол человека
						</Field>
						<Field<undefined, HTMLInputElement>
							name="photo"
							accept="image/*"
							component={FileInput}
						>
							Фото человека
							<PhotoShower
								className={CreatePostFormStyle.photoShower}
								photo={photo}
								alt="Тут отображается загруженное вами фото"
							/>
						</Field>
						<Field<string, HTMLInputElement>
							name="postHeader"
							component={Input}
						>
							Заголовок благодарности
						</Field>
						<Field<string, HTMLTextAreaElement>
							name="briefAboutPerson"
							component={Textarea}
						>
							Вкратце о человеке
						</Field>
						<Field<string, HTMLTextAreaElement>
							name="whyThanks"
							component={Textarea}
						>
							За что благодарите
						</Field>
						<Button
							className={CreatePostFormStyle.button}
							title="Оставить благодарность"
							type="submit"
							disabled={submitting}
						>
							Оставить благодарность
						</Button>
					</form>
				);
			}}
		/>
	);
};
