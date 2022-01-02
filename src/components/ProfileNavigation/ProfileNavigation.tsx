import React, { FC } from "react";
import { OnlyClassComponent } from "../../types/components";
import { NavigationItem as NavigationItemType } from "../../types/data";
import { List } from "../common/List";
import { NavigationItem } from "../NavigationItem";

const items: NavigationItemType[] = [
	{
		path: "/profile/posts",
		text: "Опубликованные посты",
	},
	{
		path: "/profile/payments",
		text: "Оплаты",
	},
];

export const ProfileNavigation: FC<OnlyClassComponent> = () => {
	return (
		<List
			items={items}
			Card={NavigationItem}
			type="unnumbered"
			indexedBy="path"
		/>
	);
};
