import classNames from "classnames";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { PostComponent } from "../../../types/components/Post";
import { DateTime } from "../DateTime";
import { Paragraph } from "../Paragraph";
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
			<Paragraph className={PostStyle.name}>{name}</Paragraph>
			<Picture className={PostStyle.photo} picture={photo} alt={name} />
			<Paragraph className={PostStyle.text}>{text}</Paragraph>
			<Paragraph className={PostStyle.author}>{author}</Paragraph>
			<DateTime className={PostStyle.date} date={date} />
			<Link className={PostStyle.more} to={`/posts/${id}`} replace={true}>
				Читать подробнее
			</Link>
		</article>
	);
};
