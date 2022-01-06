import { SimpleFunction } from "../common";
import { CreatePostFormValues } from "../components/CreatePostForm";
import { Post } from "../redux";

export type CreatePost = (newPostData: CreatePostFormValues) => Promise<void>;

export type GetPosts = SimpleFunction<Promise<Post[]>>;
