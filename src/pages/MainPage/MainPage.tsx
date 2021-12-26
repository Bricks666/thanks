import React, { FC } from "react";
import { OnlyClassComponent } from "../../types/components";

export const MainPage: FC<OnlyClassComponent> = ({ className }) => {
	return <main className={className}></main>;
};
