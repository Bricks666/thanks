import { mockPayments, mockServerResponse } from "../mocks";
import { GetPayments } from "../types/api";

export const getPayments: GetPayments = async () => {
	return await mockServerResponse(mockPayments, 3000);
};
