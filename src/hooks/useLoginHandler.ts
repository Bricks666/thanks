import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../redux";
import { constructFrom } from "../services";
import { LoginSubmitHandler } from "../types/components";
import { UseLoginHandler } from "../types/hooks";
import { useLocationState } from "./useLocationState";
import { useTypedDispatch } from "./useTypedDispatch";
import { FORM_ERROR } from "final-form";

export const useLoginHandler: UseLoginHandler = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();
	const state = useLocationState<Location>();

	return useCallback<LoginSubmitHandler>(
		async (values, formApi, errorHandler) => {
			const isLogged = await dispatch(
				loginThunk(values, formApi, errorHandler)
			);
			if (isLogged) {
				const from = constructFrom(state, "/profile");
				navigate(from, { replace: true });
				formApi.restart();
			} else {
				errorHandler &&
					errorHandler({ [FORM_ERROR]: "Введен неверный логин или пароль" });
			}
		},
		[dispatch, navigate]
	);
};
