import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginThunk } from "../redux";
import { LoginSubmitHandler } from "../types/components";
import { UseLoginHandler } from "../types/hooks";
import { useTypedDispatch } from "./useTypedDispatch";

export const useLoginHandler: UseLoginHandler = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	return useCallback<LoginSubmitHandler>(
		(values, formApi, errorHandler) => {
			dispatch(loginThunk(values, formApi, errorHandler)).then(() => {
				const state = location.state as Location;
				const from = state?.pathname + state?.search || "/profile";
				navigate(from, { replace: true });
			});
		},
		[dispatch, navigate]
	);
};
