import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useIsLogin } from ".";
import { UseOnlyAuthUser } from "../types/hooks";

export const useOnlyAuthUser: UseOnlyAuthUser = () => {
	const isLogin = useIsLogin();
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (isLogin === false) {
			navigate("/login", { state: location, replace: true });
		}
	}, []);
};
