import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Paragraph } from ".";

describe("<Paragraph /> component", () => {
	test("render with text child", () => {
		const { container } = render(<Paragraph>Test</Paragraph>);
		expect(container.textContent).toContain("Test");
	});

	test("render with className", () => {
		const { container } = render(<Paragraph className="test">Test</Paragraph>);
		expect(container.querySelector(".test")).not.toBeNull();
	});
});
