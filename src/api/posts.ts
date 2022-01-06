import { mockPosts, mockServerResponse } from "./../mocks";
import { CreatePost, GetPosts } from "../types/api";

export const createPost: CreatePost = async (newPostData) => {
	return await mockServerResponse(undefined, 3000);
};

export const getPosts: GetPosts = async () => {
	return await mockServerResponse(mockPosts, 3000);
};
