import React, { FC } from "react";
import classNames from "classnames";
import { FieldComponent } from "../../../types/components";
import { ErrorMessage } from "../ErrorMessage";

export const Field: FC<FieldComponent> = ({
	className,
	input,
	children,
	meta,
}) => {
	const showError = meta.touched && meta.error;
	return (
		<label className={classNames(className)}>
			{children}
			{showError && <ErrorMessage>{meta.error}</ErrorMessage>}
			<input {...input} disabled={meta.submitting} />
		</label>
	);
};
