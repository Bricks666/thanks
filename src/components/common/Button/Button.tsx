import React, { FC } from "react";
import classNames from "classnames";
import { ButtonComponent } from "../../../types/components";

import ButtonStyle from "./Button.module.css";

export const Button: FC<ButtonComponent> = ({
	children,
	className,
	title,
	type,
	disabled,
	onClick,
}) => {
	return (
		<button
			className={classNames(ButtonStyle.button, className)}
			onClick={onClick}
			title={title}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
