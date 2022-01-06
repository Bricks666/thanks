import { mockInstructions } from "./../mocks/mockInstructions";
import { mockServerResponse } from "../mocks";
import { GetInstructions } from "../types/api";

export const getInstructions: GetInstructions = async () => {
	return await mockServerResponse(mockInstructions, 3000);
};
