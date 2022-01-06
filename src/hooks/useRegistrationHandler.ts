import { useCallback } from "react";
import { useTypedDispatch } from "./useTypedDispatch";
import { UseRegistrationHandler } from "./../types/hooks/";
import { RegistrationSubmitHandler } from "../types/components";
import { registrationThunk } from "../redux";
import { useNavigate } from "react-router-dom";
import { useLocationState } from "./useLocationState";
import { constructFrom } from "../services";
import { FORM_ERROR } from "final-form";

export const useRegistrationHandler: UseRegistrationHandler = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();
	const state = useLocationState<Location>();

	return useCallback<RegistrationSubmitHandler>(
		async (values, fromApi, errorHandler) => {
			const isRegistration = await dispatch(registrationThunk(values));

			if (isRegistration) {
				const from = constructFrom(state, "/profile");
				navigate(from, { replace: true });
				fromApi.restart();
			} else {
				errorHandler &&
					errorHandler({
						[FORM_ERROR]: "Данный пользователь уже зарегистрирован",
					});
			}
		},
		[dispatch, navigate]
	);
};
