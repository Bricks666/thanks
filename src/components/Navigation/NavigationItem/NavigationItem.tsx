import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { NavigationItemComponent } from "../../../types/components";

export const NavigationItem: FC<NavigationItemComponent> = ({
	className,
	text,
	path,
}) => {
	return (
		<li className={classNames(className)}>
			<NavLink to={path}>{text}</NavLink>
		</li>
	);
};
