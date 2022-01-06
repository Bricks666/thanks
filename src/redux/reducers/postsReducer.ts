import {
	AddPostAC,
	SetPostsAC,
	PostsActions,
	PostsActionTypes,
} from "../../types/redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.posts,
	action: PostsActions
) {
	switch (action.type) {
		case PostsActionTypes.SET_POSTS: {
			return action.payload.posts;
		}

		case PostsActionTypes.ADD_POST: {
			return [...state, action.payload.post];
		}
		default: {
			return state;
		}
	}
}

export const addPostAC: AddPostAC = (post) => {
	return {
		type: PostsActionTypes.ADD_POST,
		payload: {
			post,
		},
	};
};

export const setPostsAC: SetPostsAC = (posts) => {
	return {
		type: PostsActionTypes.SET_POSTS,
		payload: {
			posts,
		},
	};
};
