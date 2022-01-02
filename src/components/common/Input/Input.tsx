import React, { FC } from "react";
import classNames from "classnames";
import { ErrorMessage } from "../ErrorMessage";
import { InputComponent } from "../../../types/components";

export const Input: FC<InputComponent> = ({
	className,
	input,
	children,
	meta,
	disabled,
	readonly,
}) => {
	const showError = meta.touched && meta.error;
	const disable = meta.submitting || disabled;
	return (
		<label className={classNames(className)}>
			{children}
			{showError && <ErrorMessage>{meta.error}</ErrorMessage>}
			<input {...input} disabled={disable} readOnly={readonly} />
		</label>
	);
};
