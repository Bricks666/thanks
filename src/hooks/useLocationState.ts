import { useLocation } from "react-router-dom";
import { UseLocationState } from "../types/hooks";

export const useLocationState: UseLocationState = <T>(): T | null => {
	const location = useLocation();
	const state = location.state;

	return (state as T) || null;
};
