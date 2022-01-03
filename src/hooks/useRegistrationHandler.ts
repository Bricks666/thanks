import { useCallback } from "react";
import { useTypedDispatch } from "./useTypedDispatch";
import { UseRegistrationHandler } from "./../types/hooks/";
import { RegistrationSubmitHandler } from "../types/components";
import { registrationThunk } from "../redux";
import { useNavigate } from "react-router-dom";
import { useLocationState } from "./useLocationState";
import { constructFrom } from "../services";

export const useRegistrationHandler: UseRegistrationHandler = () => {
	const dispatch = useTypedDispatch();
	const navigate = useNavigate();
	const state = useLocationState<Location>();

	return useCallback<RegistrationSubmitHandler>(
		async (values, fromApi) => {
			await dispatch(registrationThunk(values, fromApi)).then();
			const from = constructFrom(state, "/profile");
			navigate(from, { replace: true});
		},
		[dispatch]
	);
};
