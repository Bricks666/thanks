import { Payment } from "../types/redux";

export const mockPayments: Payment[] = [
	{
		id: 1,
		value: 15,
		status: "success",
		date: new Date().toLocaleString(),
	},
	{
		id: 2,
		value: 36,
		status: "fail",
		date: new Date(-15).toLocaleString(),
	},
];
