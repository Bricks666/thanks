import Axios from "axios";
import {
	MakeDeleteRequest,
	MakeGetRequest,
	MakePostRequest,
	MakePutRequest,
} from "../types/api";

const instance = Axios.create({
	baseURL: "https://example.com/",
	withCredentials: true,
});

export const makeGetRequest: MakeGetRequest = async (endPoint) => {
	return await instance.get(endPoint);
};

export const makeDeleteRequest: MakeDeleteRequest = async (endPoint) => {
	return await instance.delete(endPoint);
};

export const makePostRequest: MakePostRequest = async (
	endPoint,
	requestData
) => {
	return await instance.post(endPoint, requestData);
};

export const makePutRequest: MakePutRequest = async (endPoint, requestData) => {
	return await instance.put(endPoint, requestData);
};
