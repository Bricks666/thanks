import { useEffect } from "react";
import { loadProfileThunk } from "../redux";
import { getProfile } from "../selectors";
import { UseProfile } from "../types/hooks";
import { useTypedDispatch } from "./useTypedDispatch";
import { useTypedSelector } from "./useTypedSelector";

export const useProfile: UseProfile = () => {
	const profile = useTypedSelector(getProfile);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		if (profile.id === 0) {
			dispatch(loadProfileThunk());
		}
	}, [dispatch, profile.id]);

	return profile;
};
