import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setToSessionStorage } from "../services/setToSessionStorage";
import { UseFormStepSubmitHandler } from "../types/hooks";

export const useFormStepSubmitHandler: UseFormStepSubmitHandler = (
	step,
	title
) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return useCallback(
		(values) => {
			setToSessionStorage(title, values);
			navigate(pathname, { state: { currentStep: step + 1 } });
		},
		[navigate, pathname, title, step]
	);
};
