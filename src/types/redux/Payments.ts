import { DateType, ID } from "../common";

type PaymentStatus = "pending" | "fail" | "success";

export interface Payment {
	readonly id: ID;
	readonly value: number;
	readonly date: DateType;
	readonly status: PaymentStatus;
}

export enum PaymentsActionTypes {
	SET_PAYMENTS = "thanks/payments/SET_PAYMENTS",
}

interface SetPaymentsPayload {
	readonly payments: Payment[];
}

export interface SetPaymentsAction {
	readonly type: PaymentsActionTypes.SET_PAYMENTS;
	readonly payload: SetPaymentsPayload;
}

export type PaymentsActions = SetPaymentsAction;

export type SetPaymentsAC = (payments: Payment[]) => SetPaymentsAction;
