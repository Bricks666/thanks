import { endLoadingAC, setPaymentsAC, startLoadingAC } from "..";
import { getPayments } from "../../api";
import { LoadPaymentsThunk } from "../../types/redux";

export const loadPaymentsThunk: LoadPaymentsThunk = () => {
	return async (dispatch) => {
		try {
			dispatch(startLoadingAC("loadingPayments"));

			const response = await getPayments();
			dispatch(setPaymentsAC(response));

			dispatch(endLoadingAC("loadingPayments"));
		} catch (e) {
			console.log(e);
		}
	};
};
