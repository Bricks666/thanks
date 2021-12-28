import React, { FC } from "react";
import { useOnlyAuthUser } from "../../hooks";

export const OnlyAuthUser: FC = ({ children }) => {
	useOnlyAuthUser();

	return <>{children}</>;
};
