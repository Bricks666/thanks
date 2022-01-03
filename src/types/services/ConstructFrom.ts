import { URL } from "../common";

export type ConstructFrom = (
	state: Location | null,
	fallbackURL: URL,
	fallbackSearch?: string,
	fallbackHash?: string
) => URL;
