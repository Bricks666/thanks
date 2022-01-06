import { mockServerResponse } from "../mocks";
import { Login } from "../types/api";

export const login: Login = async (login, password, remember) => {
	return await mockServerResponse(
		login === "admin" && password === "admin",
		3000
	);
};
