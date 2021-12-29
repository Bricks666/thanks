import { SimpleFunction } from "../types/common";

export const clearSessionStorage: SimpleFunction = () => {
	sessionStorage.clear();
};
