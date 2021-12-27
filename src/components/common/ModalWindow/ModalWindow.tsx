import React, { FC } from "react";
import classNames from "classnames";
import { ModalWindowComponent } from "../../../types/components";

import ModalWindowStyle from "./ModalWindow.module.css";

export const ModalWindow: FC<ModalWindowComponent> = ({
	children,
	className,
	condition,
}) => {
	return condition ? (
		<div className={ModalWindowStyle.wrapper}>
			<div className={classNames(ModalWindowStyle.inner, className)}>
				{children}
			</div>
		</div>
	) : null;
};
