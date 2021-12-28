import { EmptyFunction } from "../types/common";

export const clearSessionStorage: EmptyFunction = () => {
	sessionStorage.clear();
};
