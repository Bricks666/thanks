import classNames from "classnames";
import React, { FC } from "react";
import { TextareaComponent } from "../../../types/components";
import { ErrorMessage } from "../ErrorMessage";

import TextareaStyle from "./Textarea.module.css";

export const Textarea: FC<TextareaComponent> = ({
	className,
	children,
	input,
	meta,
	disabled,
	readonly,
}) => {
	const showError = meta.touched && meta.error;
	const disable = disabled || meta.submitting;

	return (
		<label className={classNames(TextareaStyle.label, className)}>
			{showError && <ErrorMessage>{meta.error}</ErrorMessage>}
			{children}
			<textarea
				className={TextareaStyle.textarea}
				{...input}
				disabled={disable}
				readOnly={readonly}
			/>
		</label>
	);
};
