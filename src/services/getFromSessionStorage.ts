import { GetFromSessionStorage } from "../types/services";

export const getFromSessionStorage: GetFromSessionStorage = (key) => {
	const raw = sessionStorage.getItem(key);
	if (raw === null) {
		return undefined;
	}

	return JSON.parse(raw);
};
