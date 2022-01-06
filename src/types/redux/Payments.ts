import { TypedThunk } from ".";
import { DateType, ID, SimpleFunction } from "../common";

type PaymentStatus = "pending" | "fail" | "success";

export interface Payment {
	readonly id: ID;
	readonly value: number;
	readonly date: DateType;
	readonly status: PaymentStatus;
}

export enum PaymentsActionTypes {
	SET_PAYMENTS = "thanks/payments/SET_PAYMENTS",
	ADD_PAYMENT = "thanks/payments/ADD_PAYMENT",
}

interface SetPaymentsPayload {
	readonly payments: Payment[];
}

export interface SetPaymentsAction {
	readonly type: PaymentsActionTypes.SET_PAYMENTS;
	readonly payload: SetPaymentsPayload;
}
interface AddPaymentPayload {
	readonly payment: Payment;
}

export interface AddPaymentAction {
	readonly type: PaymentsActionTypes.ADD_PAYMENT;
	readonly payload: AddPaymentPayload;
}

export type PaymentsActions = SetPaymentsAction | AddPaymentAction;

export type SetPaymentsAC = (payments: Payment[]) => SetPaymentsAction;

export type LoadPaymentsThunk = SimpleFunction<TypedThunk<void>>;

export type AddPaymentAC = (payment: Payment) => AddPaymentAction;
