import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../../types/components";

export const SectionHeader: FC<OnlyClassComponent> = ({
	className,
	children,
}) => {
	return <h2 className={classNames(className)}>{children}</h2>;
};
