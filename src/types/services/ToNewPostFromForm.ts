import { CreatePostFormValues } from "../components/CreatePostForm";
import { Post } from "../redux";

export type ToNewPostFromForm = (newPostData: CreatePostFormValues) => Post;
