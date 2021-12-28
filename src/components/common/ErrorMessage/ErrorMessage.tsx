import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../../types/components";

import ErrorMessageStyle from "./ErrorMessage.module.css";

export const ErrorMessage: FC<OnlyClassComponent> = ({
	className,
	children,
}) => {
	console.log(children);
	return (
		<div className={classNames(ErrorMessageStyle.wrapper, className)}>
			<p className={ErrorMessageStyle.header}>Ошибка</p>
			{children}
		</div>
	);
};
