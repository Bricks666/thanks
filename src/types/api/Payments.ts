import { SimpleFunction } from "../common";
import { Payment } from "../redux";

export type GetPayments = SimpleFunction<Promise<Payment[]>>;
