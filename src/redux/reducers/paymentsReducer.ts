import {
	AddPaymentAC,
	PaymentsActions,
	PaymentsActionTypes,
	SetPaymentsAC,
} from "../../types/redux";
import { initialState } from "../initialState";

export default function reducer(
	state = initialState.payments,
	action: PaymentsActions
) {
	switch (action.type) {
		case PaymentsActionTypes.SET_PAYMENTS: {
			return action.payload.payments;
		}
		case PaymentsActionTypes.ADD_PAYMENT: {
			return [...state, action.payload.payment];
		}
		default: {
			return state;
		}
	}
}

export const setPaymentsAC: SetPaymentsAC = (payments) => {
	return {
		type: PaymentsActionTypes.SET_PAYMENTS,
		payload: {
			payments,
		},
	};
};

export const addPaymentAC: AddPaymentAC = (payment) => {
	return {
		type: PaymentsActionTypes.ADD_PAYMENT,
		payload: {
			payment,
		},
	};
};
