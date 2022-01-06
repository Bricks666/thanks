import { createPost } from "../../api";
import { CreatePostThunk } from "../../types/redux";
import { toNewPostFromForm } from "../../services";
import { addPostAC } from "..";

export const createPostThunk: CreatePostThunk = (newPostValues) => {
	return async (dispatch) => {
		try {
			await createPost(newPostValues);
			dispatch(addPostAC(toNewPostFromForm(newPostValues)));
		} catch (e) {
			console.log(e);
		}
	};
};
