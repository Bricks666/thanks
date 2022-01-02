import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Button } from ".";
import "@testing-library/jest-dom";

describe("<Button /> component", () => {
	test("the component render button", () => {
		const { container } = render(<Button title="test" type="button" />);
		expect(container.querySelector("button")).not.toBeNull();
	});
	test("render with text child", () => {
		const { container } = render(
			<Button title="Test" type="button">
				Test
			</Button>
		);

		expect(container.textContent).toContain("Test");
	});

	test("render with node child", () => {
		const { queryByTestId } = render(
			<Button title="Test" type="button">
				<div data-testid="div">Test</div>
			</Button>
		);

		expect(queryByTestId("div")).not.toBeNull();
	});

	test("with type button", () => {
		const { queryByTitle } = render(<Button title="Test" type="button" />);
		expect(queryByTitle("Test")).toHaveAttribute("type", "button");
	});

	test("with type submit", () => {
		const { queryByTitle } = render(<Button title="Test" type="submit" />);
		expect(queryByTitle("Test")).toHaveAttribute("type", "submit");
	});

	test("with type reset", () => {
		const { queryByTitle } = render(<Button title="Test" type="reset" />);
		expect(queryByTitle("Test")).toHaveAttribute("type", "reset");
	});

	test("render disabled", () => {
		const { queryByTitle } = render(
			<Button title="Test" type="button" disabled={true} />
		);
		expect(queryByTitle("Test")).toBeDisabled();
	});

	test("click handler with disable false", () => {
		const clickHandler = jest.fn();
		const { getByTitle } = render(
			<Button title="Test" type="button" onClick={clickHandler} />
		);
		fireEvent.click(getByTitle("Test"));
		expect(clickHandler).toHaveBeenCalledTimes(1);
	});

	test("click handler with disable true", () => {
		const clickHandler = jest.fn();
		const { getByTitle } = render(
			<Button
				title="Test"
				type="button"
				onClick={clickHandler}
				disabled={true}
			/>
		);
		fireEvent.click(getByTitle("Test"));
		expect(clickHandler).toHaveBeenCalledTimes(0);
	});

	test("render with className", () => {
		const { container } = render(
			<Button className="test" title="test" type="button" />
		);
		expect(container.querySelector(".test")).toBeTruthy();
	});
});
