import React from "react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProfileLink } from ".";

const mockLogoutHandler = jest.fn();
jest.mock("../../../hooks/", () => ({
	useLogoutHandler: () => mockLogoutHandler(),
}));

describe("<ProfileLink /> component", () => {
	test("navigate to profile", () => {
		const history = createMemoryHistory();
		const { container } = render(
			<Router location={history.location} navigator={history}>
				<ProfileLink />
			</Router>
		);
		const link = container.querySelector("a");
		expect(link).toBeTruthy();
		link && fireEvent.click(link);
		expect(history.location.pathname).toBe("/profile");
	});

	test("logout", () => {
		const history = createMemoryHistory();
		const { container } = render(
			<Router location={history.location} navigator={history}>
				<ProfileLink />
			</Router>
		);
		const button = container.querySelector("button");
		expect(button).toBeTruthy();
		button && fireEvent.click(button);
		expect(mockLogoutHandler).toHaveBeenCalledTimes(1);
	});
	test("render with className", () => {
		const history = createMemoryHistory();
		const { container } = render(
			<Router location={history.location} navigator={history}>
				<ProfileLink className="test" />
			</Router>
		);
		expect(container.querySelector(".test")).not.toBeNull();
	});
});
