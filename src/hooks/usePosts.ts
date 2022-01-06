import { useEffect } from "react";
import { loadPostsThunk } from "../redux";
import { getPosts } from "../selectors/posts";
import { UsePosts } from "../types/hooks";
import { useTypedDispatch } from "./useTypedDispatch";
import { useTypedSelector } from "./useTypedSelector";

export const usePosts: UsePosts = () => {
	const posts = useTypedSelector(getPosts);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		if (posts.length === 0) {
			dispatch(loadPostsThunk());
		}
	}, [dispatch, posts.length]);

	return posts;
};
