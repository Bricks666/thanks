import { SetToSessionStorage } from "./../types/services";

export const setToSessionStorage: SetToSessionStorage = (key, value) => {
	sessionStorage.setItem(key, JSON.stringify(value));
};
