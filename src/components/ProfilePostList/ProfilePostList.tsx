import classNames from "classnames";
import React, { FC } from "react";
import { usePosts } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { List } from "../common/List";
import { Post } from "../common/Post";

import ProfilePostListStyle from "./ProfilePostList.module.css";

export const ProfilePostList: FC<OnlyClassComponent> = ({ className }) => {
	const posts = usePosts();

	return (
		<List
			className={classNames(ProfilePostListStyle.list, className)}
			items={posts}
			Card={Post}
			type="unnumbered"
			indexedBy="id"
			itemClassName={ProfilePostListStyle.post}
		/>
	);
};
