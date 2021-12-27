import { getPostById } from "../selectors/posts";
import { UsePost } from "../types/hooks";
import { useTypedSelector } from "./useTypedSelector";

export const usePost: UsePost = (id) => {
	return useTypedSelector((state) => getPostById(state, id));
};
