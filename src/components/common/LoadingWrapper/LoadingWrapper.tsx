import React, { FC } from "react";
import classNames from "classnames";
import { LoadingWrapperComponent } from "../../../types/components";

import LoadingWrapperStyle from "./LoadingWrapper.module.css";

export const LoadingWrapper: FC<LoadingWrapperComponent> = ({
	isLoading,
	loadingIndicator,
	children,
	className,
}) => {
	return isLoading ? (
		<div className={classNames(LoadingWrapperStyle.wrapper, className)}>
			{loadingIndicator}
		</div>
	) : (
		<>{children}</>
	);
};
