import { TypedThunk } from ".";
import { DateType, ID, SimpleFunction, URL } from "../common";
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
	ADD_POST = "thanks/posts/ADD_POST",
	SET_POSTS = "thanks/posts/SET_POSTS",
}
interface AddPostPayload {
	readonly post: Post;
}

interface AddPostAction {
	readonly type: PostsActionTypes.ADD_POST;
	readonly payload: AddPostPayload;
}

interface SetPostsPayload {
	readonly posts: Post[];
}

interface SetPostsAction {
	readonly type: PostsActionTypes.SET_POSTS;
	readonly payload: SetPostsPayload;
}

export type PostsActions = AddPostAction | SetPostsAction;

export type SetPostsAC = (posts: Post[]) => SetPostsAction;
export type AddPostAC = (post: Post) => AddPostAction;

export type CreatePostThunk = (
	newPostData: CreatePostFormValues
) => TypedThunk<void>;

export type LoadPostsThunk = SimpleFunction<TypedThunk<void>>;
