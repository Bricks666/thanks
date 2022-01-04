import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FileInput } from ".";
import { FieldInputProps } from "react-final-form";

const input: FieldInputProps<undefined> = {
	name: "a",
	value: undefined,
	onBlur: jest.fn(),
	onChange: jest.fn(),
	onFocus: jest.fn(),
};

describe("<FileInput /> component", () => {
	test("render input", () => {
		const { container } = render(<FileInput input={input} meta={{}} />);
		expect(container.querySelector("input")).toBeTruthy();
	});
	test("render input with text child", () => {
		const { container } = render(
			<FileInput input={input} meta={{}}>
				Test
			</FileInput>
		);
		expect(container.textContent).toContain("Test");
	});
	test("render with node child", () => {
		const { queryByTestId } = render(
			<FileInput input={input} meta={{}}>
				<div data-testid="div"></div>
			</FileInput>
		);
		expect(queryByTestId("div")).toBeTruthy();
	});
	test("handle change", () => {
		const { container } = render(
			<FileInput input={input} meta={{}}>
				<div data-testid="div"></div>
			</FileInput>
		);
		const inputComponent = container.querySelector("input");
		inputComponent && fireEvent.change(inputComponent);
		expect(input.onChange).toHaveBeenCalledTimes(1);
	});
	test("handle focus", () => {
		const { container } = render(
			<FileInput input={input} meta={{}}>
				<div data-testid="div"></div>
			</FileInput>
		);
		const inputComponent = container.querySelector("input");
		inputComponent && fireEvent.focusIn(inputComponent);
		expect(input.onFocus).toHaveBeenCalledTimes(1);
	});
	test("handle blur", () => {
		const { container } = render(
			<FileInput input={input} meta={{}}>
				<div data-testid="div"></div>
			</FileInput>
		);
		const inputComponent = container.querySelector("input");
		inputComponent && fireEvent.blur(inputComponent);
		expect(input.onBlur).toHaveBeenCalledTimes(1);
	});
	test("render with className", () => {
		const { container } = render(
			<FileInput className="test" input={input} meta={{}} />
		);
		expect(container.querySelector(".test")).toBeTruthy();
	});
});
