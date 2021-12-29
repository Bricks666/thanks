import React, { FC } from "react";
import classNames from "classnames";
import { OnlyClassComponent } from "../../types/components";
import { NavigationItem } from "../NavigationItem";
import { List } from "../common/List";
import { NavigationItem as NavigationItemType } from "../../types/redux";

const navigation: NavigationItemType[] = [
	{
		id: 1,
		path: "/",
		text: "Главная",
	},
	{
		id: 2,
		path: "/posts",
		text: "Благодарности",
	},
	{
		id: 3,
		path: "/how-to-do",
		text: "Что такое благодарность",
	},
	{
		id: 4,
		path: "/about-thanks",
		text: "Примеры благодарностей",
	},
	{
		id: 5,
		path: "/contacts",
		text: "Контакты",
	},
];

export const Navigation: FC<OnlyClassComponent> = ({ className }) => {
	return (
		<nav className={classNames(className)}>
			<List items={navigation} Card={NavigationItem} type="unnumbered" />
		</nav>
	);
};
