import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../types/components";
import { useNavigation } from "../../hooks";
import { NavigationItem } from "./NavigationItem/NavigationItem";

export const Navigation: FC<OnlyClassComponent> = ({ className }) => {
	const navigation = useNavigation();

	return (
		<nav className={classNames(className)}>
			<ul>
				{navigation.map((n) => (
					<NavigationItem {...n} key={n.id} />
				))}
			</ul>
		</nav>
	);
};
