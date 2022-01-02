import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Picture } from ".";

describe("<Picture /> component", () => {
	test("render tag img", () => {
		const { queryByRole } = render(<Picture picture={"../"} alt="test" />);
		expect(queryByRole("img")).not.toBeNull();
	});

	test("render with className", () => {
		const { container } = render(
			<Picture className="test" picture={"../"} alt="test" />
		);
		expect(container.querySelector(".test")).not.toBeNull();
	});
});
