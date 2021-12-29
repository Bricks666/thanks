import React, { FC } from "react";
import { OnlyClassComponent } from "../../types/components";
import { NavigationItem as NavigationItemType } from "../../types/redux";
import { List } from "../common/List";
import { NavigationItem } from "../NavigationItem";
const items: NavigationItemType[] = [
	{
		id: 0,
		path: "/profile/posts",
		text: "Опубликованные посты",
	},
	{
		id: 1,
		path: "/profile/payments",
		text: "Оплаты",
	},
];

export const ProfileNavigation: FC<OnlyClassComponent> = () => {
	return <List items={items} Card={NavigationItem} type="unnumbered" />;
};
