import classNames from "classnames";
import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BlockWrapper } from "../../components/common/BlockWrapper";
import { DateTime } from "../../components/common/DateTime";
import { PageWrapper } from "../../components/common/PageWrapper";
import { Paragraph } from "../../components/common/Paragraph";
import { Picture } from "../../components/common/Picture";
import { SectionHeader } from "../../components/common/SectionHeader";
import { usePost } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";

import PostPageStyle from "./PostPage.module.css";

export const PostPage: FC<OnlyClassComponent> = ({ className }) => {
	const { id } = useParams();
	const post = usePost(Number(id));
	const navigate = useNavigate();

	if (post === null) {
		navigate("/posts", { replace: true });
		return null;
	}

	/* Возможно стоит сделать через контейнерные запросы и все с одним компонентом Post */
	return (
		<main className={className}>
			<PageWrapper>
				<BlockWrapper>
					<div className={PostPageStyle.wrapper}>
						<SectionHeader>{post.postHeader}</SectionHeader>
						<Picture
							className={PostPageStyle.photo}
							picture={post.photo}
							alt={classNames(post.firstName, post.secondName, post.patronymic)}
						/>
						<Paragraph>{post.briefAboutPerson}</Paragraph>
						<Paragraph>{post.whyThanks}</Paragraph>
						<Paragraph>Автор: {post.author}</Paragraph>
						<DateTime date={post.date}>Дата добавления: </DateTime>
					</div>
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
