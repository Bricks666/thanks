import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../redux";
import { constructFrom } from "../services";
import { LoginSubmitHandler } from "../types/components";
import { UseLoginHandler } from "../types/hooks";
import { useLocationState } from "./useLocationState";
import { useTypedDispatch } from "./useTypedDispatch";

export const useLoginHandler: UseLoginHandler = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();
	const state = useLocationState<Location>();

	return useCallback<LoginSubmitHandler>(
		async (values, formApi, errorHandler) => {
			await dispatch(loginThunk(values, formApi, errorHandler));
			const from = constructFrom(state, "/profile");
			navigate(from, { replace: true });
		},
		[dispatch, navigate]
	);
};
