import React, { FC } from "react";
import { useGoStepBack } from "../../../hooks";
import { getFromSessionStorage } from "../../../services";
import {
	PaymentFormValues,
	PostInfoFormValues,
	StepFormComponent,
} from "../../../types/components";
import { Button } from "../../common/Button";

export const CheckCreatedPostForm: FC<StepFormComponent> = ({
	formName,
	step,
}) => {
	const sessionValues =
		getFromSessionStorage<PostInfoFormValues & PaymentFormValues>(formName) ||
		({} as PostInfoFormValues & PaymentFormValues);

	const goBack = useGoStepBack(step);
	return (
		<section>
			<dl>
				{Object.entries(sessionValues).map(([field, value]) => {
					return (
						<>
							<dt>{field}</dt>: <dd>{value}</dd>
						</>
					);
				})}
			</dl>
			<Button type="button" title="Назад" onClick={goBack}>
				Назад
			</Button>
		</section>
	);
};
