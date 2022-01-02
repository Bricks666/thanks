import React from "react";
import { render } from "@testing-library/react";
import { ErrorMessage } from ".";
import "@testing-library/jest-dom";

describe("<ErrorMessage /> component", () => {
	test("render without children", () => {
		const { container } = render(<ErrorMessage />);
		expect(container.textContent).toContain("");
	});

	test("render with text child", () => {
		const { container } = render(<ErrorMessage>Test</ErrorMessage>);

		expect(container.textContent).toContain("Test");
	});

	test("render with node child", () => {
		const { queryByTestId } = render(
			<ErrorMessage>
				<div data-testid="div">Test</div>
			</ErrorMessage>
		);
		expect(queryByTestId("div")).not.toBeNull();
	});

	test("render with className", () => {
		const { container } = render(<ErrorMessage className="test" />);
		expect(container.querySelector(".test")).not.toBeNull();
	});
});
