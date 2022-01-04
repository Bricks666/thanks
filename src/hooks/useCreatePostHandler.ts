import { useCallback } from "react";
import { createPostThunk } from "../redux/thunks";
import { UseCreatePostHandler } from "../types/hooks";
import { useTypedDispatch } from "./useTypedDispatch";

export const useCreatePostHandler: UseCreatePostHandler = () => {
	const dispatch = useTypedDispatch();

	return useCallback(
		async (value, formAPI) => {
			await dispatch(createPostThunk(value));
			formAPI.restart();
		},
		[dispatch]
	);
};
