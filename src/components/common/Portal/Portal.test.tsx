import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Portal } from ".";

describe("<Portal /> component", () => {
	test("render to the body", () => {
		const { container } = render(<Portal />);
		expect(container.innerHTML).toBe("");
		expect(document.body.childNodes.length).toBe(2);
	});
	test("render with text child", () => {
		const { queryByText } = render(<Portal>Test</Portal>);
		expect(queryByText("Test")).not.toBeNull();
	});
	test("render with node child", () => {
		const { queryByTestId } = render(
			<Portal>
				<div data-testid="div">Test</div>
			</Portal>
		);
		expect(queryByTestId("div")).not.toBeNull();
	});
});
