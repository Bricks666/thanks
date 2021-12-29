import { StandardSelector } from ".";
import { Payment } from "../redux";

export type GetPayments = StandardSelector<Payment[]>;
