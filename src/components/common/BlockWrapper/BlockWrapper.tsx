import classNames from "classnames";
import React, { FC } from "react";
import { OnlyClassComponent } from "../../../types/components";

import BlockWrapperStyle from "./BlockWrapper.module.css";

export const BlockWrapper: FC<OnlyClassComponent> = ({
	className,
	children,
}) => {
	return (
		<div className={classNames(BlockWrapperStyle.wrapper, className)}>
			{children}
		</div>
	);
};
