import React from "react";
import { render } from "@testing-library/react";
import { DateTime } from ".";
import "@testing-library/jest-dom";

const date = "2020-10-19T03:00:00";
const localeDate = new Date(date).toLocaleString();

describe("<DateTime /> component", () => {
	test("the component render <time /> tag", () => {
		const { container } = render(<DateTime date={date} />);

		expect(container.querySelector("time")).not.toBeNull();
	});

	test("the component have attribute dateTime", () => {
		const { container } = render(<DateTime date={date} />);

		expect(container.querySelector("time")).toHaveAttribute("dateTime", date);
	});

	test("correctly show test date", () => {
		const { container } = render(<DateTime date={date} />);

		expect(container.textContent).toContain(localeDate);
	});

	test("correctly show date and child text", () => {
		const { container } = render(<DateTime date={date}>ASD</DateTime>);
		expect(container.textContent).toContain("ASD");
		expect(container.textContent).toContain(localeDate);
	});

	test("correctly show date and child node", () => {
		const { queryByTestId, container } = render(
			<DateTime date={date}>
				<div data-testid="div">ASD</div>
			</DateTime>
		);
		expect(queryByTestId("div")).not.toBeNull();
		expect(container.textContent).toContain(localeDate);
	});

	test("render with className", () => {
		const { container } = render(<DateTime className="test" date={date} />);
		expect(container.querySelector(".test")).not.toBeNull();
	});
});
