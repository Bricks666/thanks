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
	id,
	author,
	firstName,
	secondName,
	patronymic,
	postHeader,
	briefAboutPerson,
	whyThanks,
	photo,
	date,
}) => {
	return (
		<article className={classNames(PostStyle.post, className)}>
			<Paragraph className={PostStyle.name}>{postHeader}</Paragraph>
			<Picture
				className={PostStyle.photo}
				picture={photo}
				alt={classNames(firstName, secondName, patronymic)}
			/>
			<Paragraph className={PostStyle.text}>{briefAboutPerson}</Paragraph>
			<Paragraph className={PostStyle.text}>{whyThanks}</Paragraph>
			<Paragraph className={PostStyle.author}>{author}</Paragraph>
			<DateTime className={PostStyle.date} date={date} />
			<Link className={PostStyle.more} to={`/posts/${id}`}>
				Читать подробнее
			</Link>
		</article>
	);
};
