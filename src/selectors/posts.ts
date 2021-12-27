import { GetPostById, GetPosts } from "../types/selectors";

export const getPosts: GetPosts = (state) => {
	return state.posts;
};

export const getPostById: GetPostById = (state, id) => {
	return state.posts.find((post) => +post.id === +id) || null;
};
