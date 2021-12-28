import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCurrentFormStep } from "../../hooks";
import { clearSessionStorage } from "../../services/clearSessionStorage";
import { OnlyClassComponent, Step } from "../../types/components";
import { CheckCreatedPostForm } from "./CheckCreatedPostForm";
import { PaymentForm } from "./PaymentForm";
import { PostInfoForm } from "./PostInfoForm";

const steps: Step[] = [
	{
		title: "Благодарность",
		Component: PostInfoForm,
	},
	{
		title: "Реквизиты оплаты",
		Component: PaymentForm,
	},
	{
		title: "Проверка введенных данных",
		Component: CheckCreatedPostForm,
	},
];

const FORM_NAME = "CreatePost";

export const CreatePostForm: FC<OnlyClassComponent> = ({ className }) => {
	const stepNumber = useCurrentFormStep();

	const currentStep = steps[stepNumber];

	useEffect(() => {
		return () => {
			clearSessionStorage();
		};
	}, []);

	return (
		<section className={className}>
			<h2>Написание благодарности</h2>
			<h3>
				{currentStep.title} {stepNumber + 1} / {steps.length}
			</h3>
			{currentStep && (
				<currentStep.Component step={stepNumber} formName={FORM_NAME} />
			)}
		</section>
	);
};
