import React, { FC } from "react";
import { Field as ReactField, Form } from "react-final-form";
import { useFormStepSubmitHandler } from "../../../hooks";
import { getFromSessionStorage } from "../../../services";
import {
	PostInfoFormValues,
	StepFormComponent,
	ValidationError,
	Validator,
} from "../../../types/components";
import { Button } from "../../common/Button";
import { Field } from "../../common/Field";
import { Textarea } from "../../common/Textarea";

const initialValue: PostInfoFormValues = {
	author: "",
	name: "",
	photo: "",
	text: "",
};

const validator: Validator<PostInfoFormValues> = (values) => {
	const errors: ValidationError<PostInfoFormValues> = {};

	if (values.author === "") {
		errors.author = "Имя благодарящего должно быть заполнено";
	}
	if (values.name === "") {
		errors.name = "Имя того, кого благодарят, должно быть заполнено";
	}
	if (values.text === "") {
		errors.text = "Благодарность должна быть заполнена";
	}
	if (values.photo === "") {
		errors.photo = "Фото того, кого благодарят, должно быть загружено";
	}

	return errors;
};

export const PostInfoForm: FC<StepFormComponent> = ({
	step,
	formName,
	className,
}) => {
	const submitHandler = useFormStepSubmitHandler<PostInfoFormValues>(
		step,
		formName
	);
	const sessionValues =
		getFromSessionStorage<PostInfoFormValues>(formName) || initialValue;
	return (
		<Form
			onSubmit={submitHandler}
			initialValues={sessionValues}
			validate={validator}
			render={({ handleSubmit, invalid }) => {
				return (
					<div>
						<form className={className} onSubmit={handleSubmit}>
							<ReactField name="author" render={Field}>
								Кто благодарит
							</ReactField>
							<ReactField name="name" render={Field}>
								Кого благодарите
							</ReactField>
							<ReactField name="text" render={Textarea}>
								Слова благодарности
							</ReactField>
							<ReactField name="photo" render={Field}>
								Фото
							</ReactField>
							<Button type="submit" title="Далее" disabled={invalid}>
								Далее
							</Button>
						</form>
					</div>
				);
			}}
		/>
	);
};
