import { ConstructFrom } from "../types/services";

export const constructFrom: ConstructFrom = (
	state,
	fallbackURL,
	fallbackSearch = "",
	fallbackHash = ""
) => {
	const pathname = state?.pathname || fallbackURL;
	const search = state?.search || fallbackSearch;
	const hash = state?.hash || fallbackHash;
	return pathname + search + hash;
};
