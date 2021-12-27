/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from "react";
import classNames from "classnames";
import { OverlayPopupComponent } from "../../../types/components";
import { Portal } from "../Portal";

import OverlayPopupStyle from "./OverlayPopup.module.css";

export const OverlayPopup: FC<OverlayPopupComponent> = ({
	isOpen,
	closeHandler,
	children,
}) => {
	if (isOpen === false) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(OverlayPopupStyle.wrapper)} role="dialog">
				<div
					className={OverlayPopupStyle.overlay}
					role="button"
					tabIndex={0}
					onClick={closeHandler}
				/>
				{children}
			</div>
		</Portal>
	);
};
