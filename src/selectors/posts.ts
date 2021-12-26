import { GetPosts } from "../types/selectors";

export const getPosts: GetPosts = (state) => {
	return state.posts;
};
