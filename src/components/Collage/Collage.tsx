import React, { FC } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { usePosts } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { Picture } from "../common/Picture";
import { SelectedPost } from "./SelectedPost/SelectedPost";

import CollageStyle from "./Collage.module.css";

export const Collage: FC<OnlyClassComponent> = ({ className }) => {
	const posts = usePosts();

	return (
		<section className={classNames(CollageStyle.collage, className)}>
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
			<SelectedPost />
		</section>
	);
};
