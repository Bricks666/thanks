import { ID, URL } from "../common";

export interface Post {
	readonly id: ID;
	readonly photo: URL;
	readonly text: string;
	readonly author: ID;
}

export enum PostsActionTypes {
	ADD_POSTS = "thanks/posts/ADD_POSTS",
}
interface AddPostsPayload {
	readonly posts: Post[];
}

interface AddPostsAction {
	readonly type: PostsActionTypes.ADD_POSTS;
	readonly payload: AddPostsPayload;
}

export type PostsActions = AddPostsAction;

export type AddPostsAC = (posts: Post[]) => AddPostsAction;
