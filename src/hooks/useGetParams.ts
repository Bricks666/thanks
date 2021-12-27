import { useSearchParams } from "react-router-dom";
import { UseGetParams } from "../types/hooks";

export const useGetParams: UseGetParams = (param) => {
	const [params] = useSearchParams();
	return params.get(param);
};
