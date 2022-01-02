import React from "react";
import { BlockWrapper } from ".";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("<BlockWrapper /> component", () => {
	test("render with text content", () => {
		const { container } = render(<BlockWrapper>Test</BlockWrapper>);
		expect(container.textContent).toBe("Test");
	});

	test("render with node content", () => {
		const { queryByTestId } = render(
			<BlockWrapper>
				<div data-testid="div">asdasd</div>
			</BlockWrapper>
		);
		expect(queryByTestId("div")).not.toBeNull();
	});

	test("render with className", () => {
		const { container } = render(
			<BlockWrapper className="test">
				<div data-testid="div">asdasd</div>
			</BlockWrapper>
		);
		expect(container.querySelector(".test")).not.toBeNull();
	});
});
