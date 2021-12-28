import { AddPostsAC, PostsActions, PostsActionTypes } from "../../types/redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.posts,
	action: PostsActions
) {
	if (action.type === PostsActionTypes.ADD_POSTS) {
		return [...state, ...action.payload.posts];
	}

	return state;
}

export const addPostsAC: AddPostsAC = (posts) => {
	return {
		type: PostsActionTypes.ADD_POSTS,
		payload: {
			posts,
		},
	};
};
