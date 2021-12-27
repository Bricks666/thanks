import classNames from "classnames";
import React, { FC } from "react";
import { OnlyClassComponent } from "../../../types/components";

import PageWrapperStyle from "./PageWrapper.module.css";

export const PageWrapper: FC<OnlyClassComponent> = ({
	children,
	className,
}) => {
	return (
		<div className={classNames(PageWrapperStyle.wrapper, className)}>
			{children}
		</div>
	);
};
