import React, { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useGetParams, usePost } from "../../../hooks";
import { OnlyClassComponent } from "../../../types/components";
import { MainPopup } from "../../common/MainPopup";
import { Post } from "../../common/Post";

export const SelectedPost: FC<OnlyClassComponent> = ({ className }) => {
	const postId = useGetParams("postId");
	const post = usePost(postId || 0);
	const navigate = useNavigate();
	const closeHandler = useCallback(() => navigate(-1), [navigate]);

	if (post === null) {
		return null;
	}

	/* Переделать закрытие */

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
