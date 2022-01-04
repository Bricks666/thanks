import { Login } from "../types/api";

export const login: Login = async (login, password, remember) => {
	return await new Promise<boolean>((resolve) => {
		setTimeout(() => resolve(login === "admin" && password === "admin"), 3000);
	});
};
