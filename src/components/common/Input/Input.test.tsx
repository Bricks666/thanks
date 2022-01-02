import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { FieldInputProps, FieldMetaState } from "react-final-form";
import { Input } from ".";
import "@testing-library/jest-dom";

const input: FieldInputProps<string> = {
	name: "a",
	onBlur: jest.fn(),
	onChange: jest.fn(),
	onFocus: jest.fn(),
	value: "",
};

const meta: FieldMetaState<string> = {};

describe("<Input /> component", () => {
	test("render input", () => {
		const { container } = render(<Input input={input} meta={meta} />);
		expect(container.querySelector("input")).toBeTruthy();
	});
	test("render with text children", () => {
		const { container } = render(
			<Input input={input} meta={meta}>
				Test
			</Input>
		);

		expect(container.textContent).toContain("Test");
	});

	test("render with node children", () => {
		const { getByTestId } = render(
			<Input input={input} meta={meta}>
				<div data-testid="div">Test</div>
			</Input>
		);
		expect(getByTestId("div")).toBeInTheDocument();
	});

	test("change handler", () => {
		const { getByRole } = render(<Input input={input} meta={meta} />);
		const inputComponent = getByRole("textbox");
		fireEvent.change(inputComponent, { target: { value: "a" } });

		expect(input.onChange).toHaveBeenCalledTimes(1);
	});

	test("focus handler", () => {
		const { getByRole } = render(<Input input={input} meta={meta} />);
		const inputComponent = getByRole("textbox");
		fireEvent.focusIn(inputComponent);

		expect(input.onFocus).toHaveBeenCalledTimes(1);
	});

	test("blur handler", () => {
		const { getByRole } = render(<Input input={input} meta={meta} />);
		const inputComponent = getByRole("textbox");
		fireEvent.focusOut(inputComponent);

		expect(input.onBlur).toHaveBeenCalledTimes(1);
	});

	test("disable when disabled is true", () => {
		const { getByRole } = render(
			<Input input={input} meta={{}} disabled={true} />
		);
		const inputComponent = getByRole("textbox");
		expect(inputComponent).toBeDisabled();
	});

	test("disable when submitting true", () => {
		const { getByRole } = render(
			<Input input={input} meta={{ submitting: true }} />
		);
		const inputComponent = getByRole("textbox");
		expect(inputComponent).toBeDisabled();
	});

	test("don't show error while won't be touched", () => {
		const { queryByText } = render(
			<Input input={input} meta={{ error: "adsasdd" }} />
		);

		expect(queryByText("adsasdd")).toBeNull();
	});

	test("show error when touched and not valid", () => {
		const { queryByText } = render(
			<Input input={input} meta={{ error: "adsasdd", touched: true }} />
		);

		expect(queryByText("adsasdd")).not.toBeNull();
	});

	test("render with className", () => {
		const { container } = render(
			<Input className="test" input={input} meta={{}} />
		);
		expect(container.querySelector(".test")).not.toBeNull();
	});
});
