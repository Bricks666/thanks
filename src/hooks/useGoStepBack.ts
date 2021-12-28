import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UseGoStepBack } from "../types/hooks";

export const useGoStepBack: UseGoStepBack = (step) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return useCallback(() => {
		navigate(pathname, { state: { currentStep: step - 1 } });
	}, [navigate, pathname, step]);
};
