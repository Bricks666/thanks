import classNames from "classnames";
import React, { FC } from "react";
import { useLoading, usePosts } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { List } from "../common/List";
import { LoadingWrapper } from "../common/LoadingWrapper";
import { Post } from "../common/Post";

import ProfilePostListStyle from "./ProfilePostList.module.css";

export const ProfilePostList: FC<OnlyClassComponent> = ({ className }) => {
	const posts = usePosts();

	const isLoading = useLoading("loadingPosts");

	return (
		<LoadingWrapper isLoading={isLoading} loadingIndicator={<p>Загрузка...</p>}>
			<List
				className={classNames(ProfilePostListStyle.list, className)}
				items={posts}
				Card={Post}
				type="unnumbered"
				indexedBy="id"
				itemClassName={ProfilePostListStyle.post}
			/>
		</LoadingWrapper>
	);
};
