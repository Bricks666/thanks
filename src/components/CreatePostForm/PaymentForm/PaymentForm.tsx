import React, { FC } from "react";
import { Form, Field as ReactField } from "react-final-form";
import { useFormStepSubmitHandler, useGoStepBack } from "../../../hooks";
import { getFromSessionStorage } from "../../../services";
import {
	PaymentFormValues,
	StepFormComponent,
	ValidationError,
	Validator,
} from "../../../types/components";
import { Button } from "../../common/Button";
import { Field } from "../../common/Field";

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
			render={({ handleSubmit, invalid }) => {
				return (
					<div className={className}>
						<form onSubmit={handleSubmit}>
							<ReactField name="card" render={Field}>
								Номер карты
							</ReactField>
							<ReactField name="owner" render={Field}>
								Владелец
							</ReactField>
							<ReactField name="date" type="date" render={Field}>
								Дата окончания срока действия
							</ReactField>
							<ReactField name="cvv" render={Field}>
								CVV-коде
							</ReactField>
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
