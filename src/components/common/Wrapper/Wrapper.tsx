import classNames from "classnames";
import React, { FC } from "react";
import { OnlyClassComponent } from "../../../types/components";

import WrapperStyle from "./Wrapper.module.css";

export const Wrapper: FC<OnlyClassComponent> = ({ children, className }) => {
	return (
		<div className={classNames(WrapperStyle.wrapper, className)}>
			{children}
		</div>
	);
};
