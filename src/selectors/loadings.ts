import { GetLoadingByName } from "../types/selectors";

export const getLoadingByName: GetLoadingByName = (state, loadingName) => {
	return state.loadings[loadingName];
};
