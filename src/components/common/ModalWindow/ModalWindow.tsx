import React, { FC } from "react";
import classNames from "classnames";
import { ModalWindowComponent } from "../../../types/components";

export const ModalWindow: FC<ModalWindowComponent> = ({
	children,
	className,
	condition,
}) => {
	return condition ? (
		<div>
			<div className={classNames(className)}>{children}</div>
		</div>
	) : null;
};
