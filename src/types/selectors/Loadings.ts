import { LoadingTypes, Store } from "../redux";

export type GetLoadingByName = (
	state: Store,
	loadingName: LoadingTypes
) => boolean;
