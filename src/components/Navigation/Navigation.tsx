import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../types/components";
import { NavigationItem } from "../NavigationItem";
import { List } from "../common/List";
import { navigation } from "../../data";

export const Navigation: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<nav className={classNames(className)}>
			<List
				items={navigation}
				Card={NavigationItem}
				type="unnumbered"
				indexedBy="path"
			/>
		</nav>
	);
};
