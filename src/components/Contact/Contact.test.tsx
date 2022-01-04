import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Contact } from ".";

describe("<Contact /> component", () => {
	test("render dataitems", () => {
		const { container } = render(<Contact id="1" name="test" value="Test" />);
		expect(container.querySelector("dt")).toBeTruthy();
		expect(container.querySelector("dd")).toBeTruthy();
	});
	test("render name and value", () => {
		const { container } = render(<Contact id="1" name="test" value="Test" />);
		expect(container.textContent).toContain("test");
		expect(container.textContent).toContain("Test");
	});
	test("render with className", () => {
		const { container } = render(
			<Contact className="test" id="1" name="test" value="Test" />
		);
		expect(container.querySelector(".test")).toBeTruthy();
	});
});
