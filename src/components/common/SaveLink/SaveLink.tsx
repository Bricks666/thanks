import classNames from "classnames";
import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLocationState } from "../../../hooks/useLocationState";
import { SaveLinkComponent } from "../../../types/components";

export const SaveLink: FC<SaveLinkComponent> = ({
	className,
	children,
	to,
	saveState = false,
}) => {
	const location = useLocation();
	const currentState = useLocationState<Location>();
	const state = saveState ? currentState || location : null;

	return (
		<Link className={classNames(className)} to={to} state={state}>
			{children}
		</Link>
	);
};
