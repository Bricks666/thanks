import { mockContacts } from "./../mocks/mockContacts";
import { mockServerResponse } from "../mocks";
import { GetContacts } from "../types/api";

export const getContacts: GetContacts = async () => {
	return await mockServerResponse(mockContacts, 3000);
};
