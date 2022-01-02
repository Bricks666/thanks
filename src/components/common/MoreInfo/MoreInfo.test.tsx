import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { MoreInfo } from ".";

describe("<MoreInfo /> component", () => {
	test("render with text child", () => {
		const { container } = render(<MoreInfo info="Test">Test</MoreInfo>);
		expect(container.textContent).toContain("Test");
	});

	test("render with node child", () => {
		const { queryByTestId } = render(
			<MoreInfo info="Test">
				<div data-testid="div">Test</div>
			</MoreInfo>
		);
		expect(queryByTestId("div")).not.toBeNull();
	});

	test("show and hidden more info", () => {
		const { getByText, container } = render(
			<MoreInfo info="test">Testing</MoreInfo>
		);
		const question = getByText("Знак вопроса");

		fireEvent.mouseOver(question);
		expect(container.textContent).toContain("test");

		fireEvent.mouseLeave(question);
		expect(container.textContent).not.toContain("test");
	});
	test("render with className", () => {
		const { container } = render(
			<MoreInfo className="test" info="test">
				Test
			</MoreInfo>
		);
		expect(container.querySelector(".test")).not.toBeNull();
	});
});
