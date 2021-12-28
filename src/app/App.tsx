import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { OnlyAuthUser } from "../components/OnlyAuthUser";
import { routes } from "../routes";
import { OnlyClassComponent } from "../types/components";

import AppStyle from "./App.module.css";

export const App: FC<OnlyClassComponent> = () => {
	return (
		<div className={AppStyle.app}>
			<Header />
			<Routes>
				{routes.map(({ id, Component, path, isAuth }) => (
					<Route
						path={path}
						element={
							isAuth ? (
								<OnlyAuthUser>
									<Component />
								</OnlyAuthUser>
							) : (
								<Component />
							)
						}
						key={id}
					/>
				))}
			</Routes>
			<Footer className={AppStyle.footer} />
		</div>
	);
};
