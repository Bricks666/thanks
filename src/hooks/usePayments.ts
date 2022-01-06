import { useEffect } from "react";
import { loadPaymentsThunk } from "../redux";
import { getPayments } from "../selectors";
import { UsePayments } from "../types/hooks";
import { useTypedDispatch } from "./useTypedDispatch";
import { useTypedSelector } from "./useTypedSelector";

export const usePayments: UsePayments = () => {
	const payments = useTypedSelector(getPayments);
	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(loadPaymentsThunk());
	}, [dispatch]);

	return payments;
};
