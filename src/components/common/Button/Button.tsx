import React, { FC } from "react";
import classNames from "classnames";
import { ButtonComponent } from "../../../types/components";

export const Button: FC<ButtonComponent> = ({
	children,
	className,
	title,
	type,
	onClick,
}) => {
	return (
		<button
			className={classNames(className)}
			onClick={onClick}
			title={title}
			type={type}
		>
			{children}
		</button>
	);
};
