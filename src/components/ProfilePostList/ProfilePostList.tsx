import React, { FC } from "react";
import { usePosts } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { List } from "../common/List";
import { Post } from "../common/Post";

export const ProfilePostList: FC<OnlyClassComponent> = ({ className }) => {
	const posts = usePosts();

	return (
		<List className={className} items={posts} Card={Post} type="unnumbered" />
	);
};
