import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SectionHeader } from ".";

describe("<SectionHeader /> component", () => {
	test("render tag h2", () => {
		const { container } = render(<SectionHeader />);
		expect(container.querySelector("h2")).toBeTruthy();
	});
	test("render with text child", () => {
		const { container } = render(<SectionHeader>Test</SectionHeader>);
		expect(container.textContent).toContain("Test");
	});
	test("render with node child", () => {
		const { queryByTestId } = render(
			<SectionHeader>
				<div data-testid="div">Test</div>
			</SectionHeader>
		);
		expect(queryByTestId("div")).toBeTruthy();
	});
	test("render with className", () => {
		const { container } = render(
			<SectionHeader className="test">
				<div data-testid="div">Test</div>
			</SectionHeader>
		);
		expect(container.querySelector(".test")).toBeTruthy();
	});
});
