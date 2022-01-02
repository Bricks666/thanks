import React, { FC } from "react";
import { Form, Field } from "react-final-form";
import { useFormStepSubmitHandler, useGoStepBack } from "../../../hooks";
import { getFromSessionStorage } from "../../../services";
import {
	PaymentFormValues,
	StepFormComponent,
	ValidationError,
	Validator,
} from "../../../types/components";
import { Button } from "../../common/Button";
import { Input } from "../../common/Input/Input";

const validator: Validator<PaymentFormValues> = (values) => {
	const errors: ValidationError<PaymentFormValues> = {};
	if (!values.card) {
		errors.card = "Номер карты не должен быть пустым";
	}
	if (!values.owner) {
		errors.owner = "Владелец должен быть заполнен";
	}
	if (!values.date) {
		errors.date = "Поле даты должен быть заполнен";
	}
	if (values.cvv?.length !== 3) {
		errors.cvv = "CVV-код состоит из 3-х символов";
	}

	return errors;
};

const initialValues: PaymentFormValues = {
	card: "",
	cvv: "",
	date: "",
	owner: "",
};

export const PaymentForm: FC<StepFormComponent> = ({
	step,
	formName,
	className,
}) => {
	const submitHandler = useFormStepSubmitHandler<PaymentFormValues>(
		step,
		formName
	);
	const goBack = useGoStepBack(step);

	const sessionValues =
		getFromSessionStorage<PaymentFormValues>(formName) || initialValues;

	return (
		<Form
			onSubmit={submitHandler}
			initialValues={sessionValues}
			validate={validator}
			subscription={{ submitting: true, invalid: true }}
			render={({ handleSubmit, invalid }) => {
				return (
					<div className={className}>
						<form onSubmit={handleSubmit}>
							<Field name="card" render={Input}>
								Номер карты
							</Field>
							<Field name="owner" render={Input}>
								Владелец
							</Field>
							<Field name="date" type="date" render={Input}>
								Дата окончания срока действия
							</Field>
							<Field name="cvv" render={Input}>
								CVV-коде
							</Field>
							<Button type="submit" title="Далее" disabled={invalid}>
								Далее
							</Button>
						</form>
						<Button type="button" title="Назад" onClick={goBack}>
							Назад
						</Button>
					</div>
				);
			}}
		/>
	);
};
