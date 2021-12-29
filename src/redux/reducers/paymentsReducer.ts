import {
	PaymentsActions,
	PaymentsActionTypes,
	SetPaymentsAC,
} from "../../types/redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.payments,
	action: PaymentsActions
) {
	if (action.type === PaymentsActionTypes.SET_PAYMENTS) {
		return [...state, ...action.payload.payments];
	}

	return state;
}

export const setPaymentsAC: SetPaymentsAC = (payments) => {
	return {
		type: PaymentsActionTypes.SET_PAYMENTS,
		payload: {
			payments,
		},
	};
};
