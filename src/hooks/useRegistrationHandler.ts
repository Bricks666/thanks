import { useCallback } from "react";
import { useTypedDispatch } from "./useTypedDispatch";
import { UseRegistrationHandler } from "./../types/hooks/";
import { RegistrationSubmitHandler } from "../types/components";
import { registrationThunk } from "../redux";

export const useRegistrationHandler: UseRegistrationHandler = () => {
	const dispatch = useTypedDispatch();

	return useCallback<RegistrationSubmitHandler>(
		(values, fromApi) => {
			dispatch(registrationThunk(values, fromApi));
		},
		[dispatch]
	);
};
