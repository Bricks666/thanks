import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom";
import { SaveLink } from ".";

describe("<SaveLink /> component", () => {
	test("render with text child", () => {
		const history = createMemoryHistory();
		const { container } = render(
			<Router location={history.location} navigator={history}>
				<SaveLink to="/test">Test</SaveLink>
			</Router>
		);
		expect(container.textContent).toContain("Test");
	});
	test("render with node child", () => {
		const history = createMemoryHistory();
		const { queryByTestId } = render(
			<Router location={history.location} navigator={history}>
				<SaveLink to="/test">
					<div data-testid="div">Test</div>
				</SaveLink>
			</Router>
		);
		expect(queryByTestId("div")).not.toBeNull();
	});
	test("render with className", () => {
		const history = createMemoryHistory();
		const { container } = render(
			<Router location={history.location} navigator={history}>
				<SaveLink className="test" to="/test">
					<div data-testid="div">Test</div>
				</SaveLink>
			</Router>
		);
		expect(container.querySelector(".test")).not.toBeNull();
	});
	test("navigate without save", () => {
		const history = createMemoryHistory();
		const { container } = render(
			<Router location={history.location} navigator={history}>
				<SaveLink className="test" to="/test">
					<div data-testid="div">Test</div>
				</SaveLink>
			</Router>
		);
		const link = container.querySelector("a");
		expect(link).toBeTruthy();
		link && fireEvent.click(link);
		expect(history.location.pathname).toBe("/test");
		expect(history.location.state).toBeNull();
	});
	test("navigate with save", () => {
		const history = createMemoryHistory();
		const { container } = render(
			<Router location={history.location} navigator={history}>
				<SaveLink className="test" to="/test" saveState={true}>
					<div data-testid="div">Test</div>
				</SaveLink>
			</Router>
		);
		const prevLocation = { ...history.location };
		const link = container.querySelector("a");
		expect(link).toBeTruthy();
		link && fireEvent.click(link);
		expect(history.location.pathname).toBe("/test");
		expect(history.location.state).toStrictEqual(prevLocation);
	});
});
