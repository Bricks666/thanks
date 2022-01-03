import React from "react";
import classNames from "classnames";
import { ErrorMessage } from "../ErrorMessage";
import { InputComponent } from "../../../types/components";

import InputStyle from "./Input.module.css";

export const Input: InputComponent = ({
	className,
	children,
	input,
	meta,
	disabled,
	...props
}) => {
	const showError = meta.touched && meta.error;
	const disable = meta.submitting || disabled;
	return (
		<label className={classNames(InputStyle.label, className)}>
			{children}
			{showError && <ErrorMessage>{meta.error}</ErrorMessage>}
			<input
				className={InputStyle.input}
				{...input}
				disabled={disable}
				{...props}
			/>
		</label>
	);
};
