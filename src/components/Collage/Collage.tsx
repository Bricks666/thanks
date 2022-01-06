import React, { FC } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useLoading, usePosts } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { Picture } from "../common/Picture";
import { SelectedPost } from "./SelectedPost/SelectedPost";
import { LoadingWrapper } from "../common/LoadingWrapper";

import CollageStyle from "./Collage.module.css";

export const Collage: FC<OnlyClassComponent> = ({ className }) => {
	const posts = usePosts();

	const isLoading = useLoading("loadingPosts");

	return (
		<section className={classNames(CollageStyle.collage, className)}>
			<LoadingWrapper
				isLoading={isLoading}
				loadingIndicator={<h2>Загрузка...</h2>}
			>
				{posts.map((post) => (
					<Link
						className={CollageStyle.link}
						to={"?postId=" + post.id.toString()}
						key={post.id}
					>
						<Picture
							className={CollageStyle.picture}
							picture={post.photo}
							alt={post.postHeader}
						/>
					</Link>
				))}
			</LoadingWrapper>
			<SelectedPost />
		</section>
	);
};
