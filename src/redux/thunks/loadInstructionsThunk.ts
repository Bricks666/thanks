import { endLoadingAC, setInstructionAC, startLoadingAC } from "..";
import { getInstructions } from "../../api";
import { LoadInstructionsThunk } from "../../types/redux";

export const loadInstructionsThunk: LoadInstructionsThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingAC("loadingInstructions"));

			const response = await getInstructions();

			dispatch(setInstructionAC(response));
			dispatch(endLoadingAC("loadingInstructions"));
		} catch (e) {
			console.log(e);
		}
	};
};
