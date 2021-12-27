import React, { FC } from "react";
import classNames from "classnames";
import { MainPopupComponent } from "../../../types/components";
import { OverlayPopup } from "../OverlayPopup";

import ModalWindowStyle from "./MainPopup.module.css";

export const MainPopup: FC<MainPopupComponent> = ({
	children,
	className,
	isOpen,
	closeHandler,
}) => {
	return (
		<OverlayPopup isOpen={isOpen} closeHandler={closeHandler}>
			<div className={classNames(ModalWindowStyle.inner, className)}>
				<button onClick={closeHandler}>Закрыть</button>
				{children}
			</div>
		</OverlayPopup>
	);
};
