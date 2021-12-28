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

export const PostPage: FC<OnlyClassComponent> = ({ className }) => {
	const { id } = useParams();
	const post = usePost(Number(id));
	const navigate = useNavigate();
	console.log("Post");

	if (post === null) {
		navigate("/posts", { replace: true });
		return null;
	}

	/* Возможно стоит сделать через контейнерные запросы и все с одним компонентом Post */
	return (
		<main className={className}>
			<PageWrapper>
				<BlockWrapper>
					<SectionHeader>{post.name}</SectionHeader>
					<Picture picture={post.photo} alt={post.name} />
					<Paragraph>{post.text}</Paragraph>
					<Paragraph>{post.author}</Paragraph>
					<DateTime date={post.date} />
				</BlockWrapper>
			</PageWrapper>
		</main>
	);
};
