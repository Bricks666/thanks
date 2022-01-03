import React from "react";
import { SelectComponent } from "../../../types/components";
import { ErrorMessage } from "../ErrorMessage";

export const Select: SelectComponent = ({
	options,
	optionClassName,
	className,
	input,
	meta,
	disabled,
	children,
	...rest
}) => {
	console.log(rest);
	const disable = meta.submitting || disabled;
	const showError = meta.error && meta.touched;
	return (
		<label>
			{children}
			{showError && <ErrorMessage>{meta.error}</ErrorMessage>}
			<select className={className} {...input} disabled={disable}>
				{options?.map((value) => (
					<option className={optionClassName} value={value} key={value}>
						{value}
					</option>
				))}
			</select>
		</label>
	);
};
