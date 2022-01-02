import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PageWrapper } from ".";

describe("<PageWrapper /> component", () => {
	test("render with text child", () => {
		const { container } = render(<PageWrapper>Test</PageWrapper>);
		expect(container.textContent).toContain("Test");
	});

	test("render with node child", () => {
		const { queryByTestId } = render(
			<PageWrapper>
				<div data-testid="div">Test</div>
			</PageWrapper>
		);

		expect(queryByTestId("div")).not.toBeNull();
	});

	test("render with className", () => {
		const { container } = render(
			<PageWrapper className="test">
				<div data-testid="div">Test</div>
			</PageWrapper>
		);

		expect(container.querySelector(".test")).not.toBeNull();
	});
});
