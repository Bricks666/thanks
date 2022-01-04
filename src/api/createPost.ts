import { CreatePost } from "../types/api";

export const createPost: CreatePost = async (newPostData) => {
	return await new Promise((resolve) => {
		setTimeout(resolve, 3000);
	});
};
