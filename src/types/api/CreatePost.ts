import { CreatePostFormValues } from "../components/CreatePostForm";

export type CreatePost = (newPostData: CreatePostFormValues) => Promise<void>;
