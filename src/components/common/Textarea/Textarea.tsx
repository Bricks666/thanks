import classNames from "classnames";
import React, { FC } from "react";
import { TextareaComponent } from "../../../types/components";
import { ErrorMessage } from "../ErrorMessage";

export const Textarea: FC<TextareaComponent> = ({
	className,
	children,
	input,
	meta,
}) => {
	const showError = meta.touched && meta.error;
	return (
		<label className={classNames(className)}>
			{showError && <ErrorMessage>{meta.error}</ErrorMessage>}
			{children}
			<textarea {...input} />
		</label>
	);
};
