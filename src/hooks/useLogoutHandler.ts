import { useCallback } from "react";
import { logoutThunk } from "../redux";
import { UseLogoutHandler } from "../types/hooks";
import { useTypedDispatch } from "./useTypedDispatch";

export const useLogoutHandler: UseLogoutHandler = () => {
	const dispatch = useTypedDispatch();

	return useCallback(() => {
		dispatch(logoutThunk());
	}, [dispatch]);
};
