import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { PostComponent } from "../../../types/components/Post";
import { Picture } from "../Picture";

import PostStyle from "./Post.module.css";

export const Post: FC<PostComponent> = ({
	className,
	author,
	id,
	photo,
	text,
	name,
	date,
}) => {
	return (
		<article className={classNames(PostStyle.post, className)}>
			<p className={PostStyle.name}>{name}</p>
			<Picture className={PostStyle.photo} picture={photo} alt={name} />
			<p className={PostStyle.text}>{text}</p>
			<p className={PostStyle.author}>{author}</p>
			<time className={PostStyle.date} dateTime={date}>
				{date}
			</time>
			<Link className={PostStyle.more} to={`/posts/${id}`}>
				Читать подробнее
			</Link>
		</article>
	);
};
