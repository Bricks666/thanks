import React, { FC, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetParams, useKeyListener, usePost } from "../../../hooks";
import { OnlyClassComponent } from "../../../types/components";
import { MainPopup } from "../../common/MainPopup";
import { Post } from "../../common/Post";

export const SelectedPost: FC<OnlyClassComponent> = ({ className }) => {
	const postId = useGetParams("postId");
	const post = usePost(Number(postId));
	const navigate = useNavigate();
	const closeHandler = useCallback(() => navigate(-1), [navigate]);

	const isEscPress = useKeyListener("Escape");

	useEffect(() => {
		if (isEscPress && !!post) {
			closeHandler();
		}
	}, [isEscPress, closeHandler, post]);

	if (post === null) {
		return null;
	}

	/* TODO:Переделать закрытие */

	return (
		<MainPopup
			className={className}
			isOpen={!!postId}
			closeHandler={closeHandler}
		>
			<Post {...post} />
		</MainPopup>
	);
};
