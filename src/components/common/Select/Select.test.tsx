import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Select } from ".";
import { FieldInputProps } from "react-final-form";

const input: FieldInputProps<string | number> = {
	value: "",
	name: "select",
	onBlur: jest.fn(),
	onChange: jest.fn(),
	onFocus: jest.fn(),
};

describe("<Select /> component", () => {
	test("render select tag", () => {
		const { container } = render(<Select input={input} meta={{}} />);
		expect(container.querySelector("select")).toBeTruthy();
	});
	test("render options tag", () => {
		const options = ["a", "a", "a"];
		const { container } = render(
			<Select options={options} input={input} meta={{}} />
		);
		expect(container.querySelectorAll("option").length).toBe(options.length);
	});
	test("render with text child", () => {
		const { container } = render(
			<Select options={["a"]} input={input} meta={{}}>
				Test
			</Select>
		);
		expect(container.textContent).toContain("Test");
	});
	test("render with node child", () => {
		const { queryByTestId } = render(
			<Select options={["a"]} input={input} meta={{}}>
				<div data-testid="div"></div>
			</Select>
		);
		expect(queryByTestId("div")).toBeTruthy();
	});
	test("handle change", () => {
		const { container } = render(
			<Select options={["a"]} input={input} meta={{}} />
		);
		const select = container.querySelector("select");
		select && fireEvent.change(select, { target: { value: "a" } });

		expect(input.onChange).toHaveBeenCalledTimes(1);
	});
	test("handle focus", () => {
		const { container } = render(
			<Select options={["a"]} input={input} meta={{}} />
		);
		const select = container.querySelector("select");
		select && fireEvent.focusIn(select, { target: { value: "a" } });

		expect(input.onFocus).toHaveBeenCalledTimes(1);
	});
	test("handle blur", () => {
		const { container } = render(
			<Select options={["a"]} input={input} meta={{}} />
		);
		const select = container.querySelector("select");
		select && fireEvent.blur(select, { target: { value: "a" } });

		expect(input.onBlur).toHaveBeenCalledTimes(1);
	});
	test("render with className", () => {
		const { container } = render(
			<Select className="test" input={input} meta={{}} />
		);
		expect(container.querySelector(".test")).toBeTruthy();
	});
	test("render with optionClassName", () => {
		const options = ["a", "a", "a"];
		const { container } = render(
			<Select
				optionClassName="test"
				options={options}
				input={input}
				meta={{}}
			/>
		);
		expect(container.querySelectorAll(".test").length).toBe(options.length);
	});
});
