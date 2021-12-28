import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../types/components";
import { useNavigation } from "../../hooks";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import { List } from "../common/List";

export const Navigation: FC<OnlyClassComponent> = ({ className }) => {
	const navigation = useNavigation();

	return (
		<nav className={classNames(className)}>
			<List items={navigation} Card={NavigationItem} type="unnumbered" />
		</nav>
	);
};
