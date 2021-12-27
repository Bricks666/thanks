import { useCallback } from "react";
import { loginThunk } from "../redux";
import { LoginSubmitHandler } from "../types/components";
import { UseLoginHandler } from "../types/hooks";
import { useTypedDispatch } from "./useTypedDispatch";

export const useLoginHandler: UseLoginHandler = () => {
	const dispatch = useTypedDispatch();

	return useCallback<LoginSubmitHandler>(
		(values, formApi, errorHandler) =>
			dispatch(loginThunk(values, formApi, errorHandler)),
		[dispatch]
	);
};
