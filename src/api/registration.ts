import { mockServerResponse } from "../mocks";
import { Registration } from "../types/api";

export const registration: Registration = async (login, password) => {
	return await mockServerResponse(login !== "admin", 3000);
};
