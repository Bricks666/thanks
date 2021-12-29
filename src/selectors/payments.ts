import { GetPayments } from "../types/selectors";

export const getPayments: GetPayments = (state) => {
	return state.payments;
};
