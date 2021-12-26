import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { routes } from "../routes";
import { OnlyClassComponent } from "../types/components";

export const App: FC<OnlyClassComponent> = () => {
	return (
		<>
			<Header />
			<Routes>
				{routes.map(({ id, Component, path }) => (
					<Route path={path} element={<Component />} key={id} />
				))}
			</Routes>
		</>
	);
};
