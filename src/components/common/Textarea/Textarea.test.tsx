import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FieldInputProps } from "react-final-form";
import { Textarea } from ".";
const inputProps: FieldInputProps<string> = {
	name: "test",
	onBlur: jest.fn(),
	onChange: jest.fn(),
	onFocus: jest.fn(),
	value: "",
};

const errorMessage = "Test error";

describe("<Textarea /> component", () => {
	test("render tag textarea", () => {
		const { container } = render(<Textarea input={inputProps} meta={{}} />);
		expect(container.querySelector("textarea")).toBeTruthy();
	});
	test("render with text child", () => {
		const { container } = render(
			<Textarea input={inputProps} meta={{}}>
				Test
			</Textarea>
		);
		expect(container.textContent).toContain("Test");
	});
	test("render with node child", () => {
		const { queryByTestId } = render(
			<Textarea input={inputProps} meta={{}}>
				<div data-testid="div">Test</div>
			</Textarea>
		);
		expect(queryByTestId("div")).toBeTruthy();
	});
	test("change value handler", () => {
		const { container } = render(
			<Textarea input={inputProps} meta={{}}>
				<div data-testid="div">Test</div>
			</Textarea>
		);
		const textarea = container.querySelector("textarea");
		textarea && fireEvent.change(textarea, { target: { value: "a" } });
		expect(inputProps.onChange).toHaveBeenCalledTimes(1);
	});
	test("focus handler", () => {
		const { container } = render(
			<Textarea input={inputProps} meta={{}}>
				<div data-testid="div">Test</div>
			</Textarea>
		);
		const textarea = container.querySelector("textarea");
		textarea && fireEvent.focusIn(textarea);
		expect(inputProps.onFocus).toHaveBeenCalledTimes(1);
	});
	test("blur handler", () => {
		const { container } = render(
			<Textarea input={inputProps} meta={{}}>
				<div data-testid="div">Test</div>
			</Textarea>
		);
		const textarea = container.querySelector("textarea");
		textarea && fireEvent.blur(textarea);
		expect(inputProps.onBlur).toHaveBeenCalledTimes(1);
	});
	test("disabled when pass disabled", () => {
		const { container } = render(
			<Textarea input={inputProps} meta={{}} disabled={true}>
				<div data-testid="div">Test</div>
			</Textarea>
		);
		const textarea = container.querySelector("textarea");
		expect(textarea).toBeDisabled();
	});
	test("disabled when pass submitting", () => {
		const { container } = render(
			<Textarea input={inputProps} meta={{ submitting: true }}>
				<div data-testid="div">Test</div>
			</Textarea>
		);
		const textarea = container.querySelector("textarea");
		expect(textarea).toBeDisabled();
	});
	test("dont show error when didnt touch", () => {
		const { container } = render(
			<Textarea input={inputProps} meta={{ error: errorMessage }}>
				<div data-testid="div">Test</div>
			</Textarea>
		);
		expect(container.textContent).not.toContain(errorMessage);
	});
	test("show error when touched and have it", () => {
		const { container } = render(
			<Textarea
				input={inputProps}
				meta={{ touched: true, error: errorMessage }}
			>
				<div data-testid="div">Test</div>
			</Textarea>
		);
		expect(container.textContent).toContain(errorMessage);
	});
	test("render with className", () => {
		const { container } = render(
			<Textarea className="test" input={inputProps} meta={{}}>
				<div data-testid="div">Test</div>
			</Textarea>
		);
		expect(container.querySelector(".test")).toBeTruthy();
	});
});
