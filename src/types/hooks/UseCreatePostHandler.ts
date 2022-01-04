import { FormSubmitHandler } from "../components";
import { CreatePostFormValues } from "../components/CreatePostForm";

export type UseCreatePostHandler = () => FormSubmitHandler<
	CreatePostFormValues,
	void
>;
