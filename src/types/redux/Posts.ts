import { TypedThunk } from ".";
import { DateType, ID, URL } from "../common";
import { CreatePostFormValues } from "../components/CreatePostForm";

export interface Post {
	readonly id: ID;
	readonly author: string;
	readonly firstName: string;
	readonly secondName: string;
	readonly patronymic: string;
	readonly postHeader: string;
	readonly briefAboutPerson: string;
	readonly whyThanks: string;
	readonly photo: URL;
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

export type CreatePostThunk = (
	newPostData: CreatePostFormValues
) => TypedThunk<void>;
