import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../../types/components";

export const ErrorMessage: FC<OnlyClassComponent> = ({
	className,
	children,
}) => {
	return <div className={classNames(className)}>{children}</div>;
};
