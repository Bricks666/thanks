import { useLocation } from "react-router-dom";
import { UseCurrentFormStep } from "../types/hooks";

export const useCurrentFormStep: UseCurrentFormStep = () => {
	const { state } = useLocation() as { state: { currentStep: number } };
	return state?.currentStep || 0;
};
