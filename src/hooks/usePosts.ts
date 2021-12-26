import { getPosts } from "../selectors/posts";
import { UsePosts } from "../types/hooks";
import { useTypedSelector } from "./useTypedSelector";

export const usePosts: UsePosts = () => {
	return useTypedSelector(getPosts);
};
