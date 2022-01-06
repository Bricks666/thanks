import { SimpleFunction } from "../common";
import { FormSubmitHandler } from "../components";
import { CreatePostFormValues } from "../components/CreatePostForm";

export type UseCreatePostHandler = SimpleFunction<FormSubmitHandler<
	CreatePostFormValues,
	void
>>;
