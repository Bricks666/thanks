import { endLoadingAC, startLoadingAC } from "..";
import { getPosts } from "../../api";
import { LoadPostsThunk } from "../../types/redux";
import { setPostsAC } from "../reducers";

export const loadPostsThunk: LoadPostsThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingAC("loadingPosts"));

			const response = await getPosts();
			dispatch(setPostsAC(response));

			dispatch(endLoadingAC("loadingPosts"));
		} catch (e) {
			console.log(e);
		}
	};
};
