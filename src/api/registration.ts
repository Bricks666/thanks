import { Registration } from "../types/api";

export const registration: Registration = async (login, password) => {
	return await new Promise((resolve) => {
		setTimeout(() => resolve(login !== "admin"), 3000);
	});
};
