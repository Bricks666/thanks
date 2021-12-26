import { DateType, ID, URL } from "../common";

export interface Post {
	readonly id: ID;
	readonly name: string;
	readonly photo: URL;
	readonly text: string;
	readonly author: ID;
	readonly date: DateType;
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
