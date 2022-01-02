import React, { FC } from "react";
import { Field as Field, Form } from "react-final-form";
import { escortTypes } from "../../../data";
import { useFormStepSubmitHandler } from "../../../hooks";
import { getFromSessionStorage } from "../../../services";
import {
	PostInfoFormValues,
	StepFormComponent,
	ValidationError,
	Validator,
} from "../../../types/components";
import { Button } from "../../common/Button";
import { Input } from "../../common/Input/Input";
import { Textarea } from "../../common/Textarea";
import { EscortType } from "../../EscortType";

const initialValue: PostInfoFormValues = {
	author: "",
	name: "",
	photo: "",
	text: "",
	escort: escortTypes[0].value,
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
							<Field name="author" render={Input}>
								Кто благодарит
							</Field>
							<Field name="name" render={Input}>
								Кого благодарите
							</Field>
							<Field name="text" render={Textarea}>
								Слова благодарности
							</Field>
							<Field name="photo" render={Input}>
								Фото
							</Field>
							<EscortType />
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
