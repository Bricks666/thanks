import { addPostsAC } from "./../reducers";
import { createPost } from "../../api";
import { CreatePostThunk } from "../../types/redux";
import { toNewPostFromForm } from "../../services";

export const createPostThunk: CreatePostThunk = (newPostValues) => {
	return async (dispatch) => {
		try {
			await createPost(newPostValues);
			dispatch(addPostsAC([toNewPostFromForm(newPostValues)]));
		} catch (e) {
			console.log(e);
		}
	};
};
