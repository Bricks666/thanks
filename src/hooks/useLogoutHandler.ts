import { useCallback } from "react";
import { logoutThunk } from "../redux/thunks";
import { useTypedDispatch } from "./useTypedDispatch";
export const useLogoutHandler = () => {
	const dispatch = useTypedDispatch();

	return useCallback(() => {
		dispatch(logoutThunk());
	}, [dispatch]);
};
