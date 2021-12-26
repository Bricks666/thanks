import { AxiosResponse } from "axios";
import { EmptyObject, URL } from "../common";

type Response<R> = Promise<AxiosResponse<R>>;

export type MakeGetRequest<R = EmptyObject> = (endPoint: URL) => Response<R>;

export type MakePostRequest<R = EmptyObject> = (
	endPoint: URL,
	requestData?: object
) => Response<R>;

export type MakeDeleteRequest<R = EmptyObject> = (endPoint: URL) => Response<R>;

export type MakePutRequest<R = EmptyObject> = (
	endPoint: URL,
	requestData?: object
) => Response<R>;
