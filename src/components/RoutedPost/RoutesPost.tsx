import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { usePost } from "../../hooks";
import { OnlyClassComponent } from "../../types/components";
import { Post } from "../common/Post";

export const RoutedPost: FC<OnlyClassComponent> = ({ className }) => {
	const { id } = useParams<"id">();
	const post = usePost(id || 0);
	return post !== null ? <Post {...post} className={className} /> : null;
};
