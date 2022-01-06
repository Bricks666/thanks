import { mockProfile, mockServerResponse } from "../mocks";
import { GetProfile } from "../types/api";

export const getProfile: GetProfile = async () => {
	return await mockServerResponse(mockProfile, 3000);
};
