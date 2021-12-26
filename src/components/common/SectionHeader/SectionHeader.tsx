import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../../types/components";

import SectionHeaderStyle from "./SectionHeader.module.css";

export const SectionHeader: FC<OnlyClassComponent> = ({
	className,
	children,
}) => {
	return (
		<h2 className={classNames(SectionHeaderStyle.header, className)}>
			{children}
		</h2>
	);
};
