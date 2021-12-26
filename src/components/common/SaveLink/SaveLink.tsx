import classNames from "classnames";
import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { SaveLinkComponent } from "../../../types/components";

export const SaveLink: FC<SaveLinkComponent> = ({
	className,
	children,
	to,
	saveState = false,
}) => {
	const location = useLocation();
	const state = saveState ? location : null;

	return (
		<Link className={classNames(className)} to={to} state={state}>
			{children}
		</Link>
	);
};
